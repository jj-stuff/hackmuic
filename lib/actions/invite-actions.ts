'use server';

/**
 * @file invite-actions.ts
 * @brief Handles invite creation and validation using the same Prisma client
 *        that Better Auth uses (imported from lib/auth).
 */

import { prisma } from '../auth';
import crypto from 'crypto';

/**
 * Create a new invite for a specific email.
 */
export const createInvite = async (email: string, role: 'USER' | 'ADMIN' | 'OWNER' = 'ADMIN', expiresInDays: number = 7) => {
  const inviteCode = crypto.randomBytes(16).toString('hex');

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + expiresInDays);

  try {
    const invite = await prisma.invite.create({
      data: {
        email,
        role,
        inviteCode,
        expiresAt,
      },
    });

    return invite;
  } catch (error) {
    console.error('[INVITE] createInvite error:', error);
    throw new Error('Failed to create invite');
  }
};

/**
 * Check if an email has a valid invite.
 */
export const checkInviteForEmail = async (email: string) => {
  try {
    const invite = await prisma.invite.findUnique({
      where: { email },
    });

    if (!invite) return null;
    if (invite.expiresAt < new Date()) return null;
    if (invite.accepted) return null;

    return invite;
  } catch (error) {
    console.error('[INVITE] checkInviteForEmail error:', error);
    return null;
  }
};

/**
 * Mark an invite as accepted after signup.
 */
export const markInviteAccepted = async (email: string) => {
  try {
    await prisma.invite.update({
      where: { email },
      data: { accepted: true },
    });
  } catch (error) {
    console.error('[INVITE] markInviteAccepted error:', error);
  }
};
