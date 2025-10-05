'use client';

/**
 * @file AuthClientPage
 * @brief Centralized authentication page for your Better Auth setup.
 *
 * Handles both:
 *  - Email/password sign-in or sign-up
 *  - Google social authentication
 *
 * Logic for actual sign-in/sign-up actions is imported from '@/lib/actions/auth-actions'
 * (these are already implemented in your app).
 */

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn, signInSocial, signUp } from '@/lib/actions/auth-actions';

export default function AuthClientPage() {
  // --------------------------
  // Local state management
  // --------------------------
  const [isSignIn, setIsSignIn] = useState(true); // Toggles between sign-in and sign-up mode
  const [email, setEmail] = useState(''); // Email input field
  const [password, setPassword] = useState(''); // Password input field
  const [name, setName] = useState(''); // Name input field (used only for sign-up)
  const [isLoading, setIsLoading] = useState(false); // Loading indicator for form submission
  const [error, setError] = useState(''); // Stores any authentication error message

  const router = useRouter();
  const searchParams = useSearchParams(); // (If needed) capture redirect/callback URL

  // ===========================================================
  // SOCIAL AUTH HANDLER
  // ===========================================================
  /**
   * @function handleSocialAuth
   * @description Initiates social authentication (Google)
   * @param provider - Currently only 'google' is used; GitHub removed.
   */
  const handleSocialAuth = async (provider: 'google') => {
    setIsLoading(true);
    setError('');

    try {
      // Call your existing Better Auth handler for OAuth
      await signInSocial(provider);
    } catch (err) {
      // Safely format any thrown error
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(`Error authenticating with ${provider}: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // ===========================================================
  // EMAIL/PASSWORD AUTH HANDLER
  // ===========================================================
  /**
   * @function handleEmailAuth
   * @description Handles both sign-in and sign-up via email/password
   */
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isSignIn) {
        // Sign in existing user
        const result = await signIn(email, password);
        if (!result.user) setError('Invalid email or password');
      } else {
        // Create new user account
        const result = await signUp(email, password, name);
        if (!result.user) setError('Failed to create account');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setError(`Authentication error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // ===========================================================
  // PAGE LAYOUT
  // ===========================================================
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex items-center justify-center p-4 pt-20">
        <div className="max-w-md w-full space-y-8">
          {/* Page heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{isSignIn ? 'MUIC HACK' : 'Create Account'}</h1>
            <p className="text-gray-600">{isSignIn ? 'Sign in to access admin dashboard' : 'Sign up to get started'}</p>
          </div>

          {/* ---------------- Error Alert ---------------- */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <svg className="h-5 w-5 text-red-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="ml-3 text-sm text-red-800">{error}</p>
              </div>
            </div>
          )}

          {/* ---------------- Social Authentication ---------------- */}
          <div className="space-y-3">
            <button onClick={() => handleSocialAuth('google')} disabled={isLoading} className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              {/* Google icon (SVG) */}
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* ---------------- Email/Password Form ---------------- */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {/* Name input (only shown when signing up) */}
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input id="name" name="name" type="text" autoComplete="name" required={!isSignIn} value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder="Enter your full name" />
              </div>
            )}

            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder="Enter your email" />
            </div>

            {/* Password input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input id="password" name="password" type="password" autoComplete={isSignIn ? 'current-password' : 'new-password'} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" placeholder="Enter your password" />
            </div>

            {/* Submit button */}
            <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
              {isLoading ? (
                <div className="flex items-center">
                  {/* Inline loading spinner */}
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0
                       c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isSignIn ? 'Signing in...' : 'Creating account...'}
                </div>
              ) : isSignIn ? (
                'Sign In'
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* ---------------- Mode Toggle (Sign-in ↔ Sign-up) ---------------- */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignIn(!isSignIn);
                setError('');
                setName('');
              }}
              className="text-indigo-600 hover:text-indigo-500 text-sm font-medium transition-colors"
            >
              {isSignIn ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
