'use server';

/**
 * @file auth-actions.ts
 * @brief Handles authentication using Better Auth API endpoints.
 *
 * Integrated with Better Auth’s built-in Prisma adapter.
 * No direct Prisma imports needed — Better Auth handles persistence.
 *
 * Responsibilities:
 *   - Email/password sign-up and sign-in
 *   - Social (Google) sign-in
 *   - Sign-out
 *   - Optional invite validation via `checkInviteForEmail`
 */

import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { auth } from '../auth';
import { checkInviteForEmail, markInviteAccepted } from './invite-actions';

/**
 * @function signUp
 * @description Sign up a new user via Better Auth email/password flow.
 * Optionally checks for a valid invite before creating the user.
 */
export const signUp = async (email: string, password: string, name: string) => {
  const invite = await checkInviteForEmail(email);
  if (!invite) {
    throw new Error('No valid invite found for this email.');
  }

  // Perform sign-up via Better Auth API
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL: '/dashboard',
    },
  });

  // Better Auth manages persistence, but we still mark the invite as used
  await markInviteAccepted(email);

  return result;
};

/**
 * @function signIn
 * @description Sign in an existing user with email/password credentials.
 */
export const signIn = async (email: string, password: string) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: '/dashboard',
    },
  });

  return result;
};

/**
 * @function signInSocial
 * @description Sign in using a social provider (e.g., Google).
 */
export const signInSocial = async (provider: 'google') => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: '/dashboard',
    },
  });

  if (url) redirect(url);
};

/**
 * @function signOut
 * @description Signs the user out of the current session.
 */
export const signOut = async () => {
  const result = await auth.api.signOut({ headers: await headers() });
  return result;
};
