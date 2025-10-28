'use client';

import { useState } from 'react';
import { signUpAction } from '../../actions/auth'; // adjust this path to your setup

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Sign Up</h1>

      <form
        action={async (formData) => {
          setLoading(true);
          setError(null);
          try {
            await signUpAction(formData);
          } catch (err: any) {
            setError(err.message || 'Something went wrong');
            setLoading(false);
          }
        }}
        className="flex flex-col gap-3 w-72"
      >
        <input type="text" name="name" placeholder="Name" required className="border rounded-md px-3 py-2 text-black" />
        <input type="email" name="email" placeholder="Email" required className="border rounded-md px-3 py-2 text-black" />
        <input type="password" name="password" placeholder="Password" required className="border rounded-md px-3 py-2 text-black" />

        <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50">
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
