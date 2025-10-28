'use server';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

// ---------------------------
// SIGN UP ACTION
// ---------------------------
export async function signUpAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  if (!email || !password || !name) {
    throw new Error('All fields are required.');
  }

  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  // Redirect user to dashboard or login page
  redirect('/admin'); // or '/login' depending on your flow
}

// ---------------------------
// SIGN IN ACTION
// ---------------------------
export async function signInAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error('Email and password are required.');
  }

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  // Redirect to admin/dashboard after login
  redirect('/admin');
}

// ---------------------------
// SIGN OUT ACTION
// ---------------------------
export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect('/');
}
