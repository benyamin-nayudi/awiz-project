'use server';

import { prisma } from '@/db/client';

import {
  profileSchema,
  type ProfileFormData,
} from '@/features/dashboard/validator/dashboard-form.validation';

// Shared result types for update action
export interface UpdateUserResultSuccess {
  success: true;
}
export interface UpdateUserResultFailure {
  success: false;
  errors: Record<string, string[]>;
}
export type UpdateUserResult = UpdateUserResultSuccess | UpdateUserResultFailure;

// Server Action: validate form with Zod and persist via Prisma
export async function updateUserProfileAction(
  userId: string,
  formData: ProfileFormData
): Promise<UpdateUserResult> {
  const parsed = profileSchema.safeParse(formData);
  if (!parsed.success) {
    const { fieldErrors, formErrors } = parsed.error.flatten();
    const normalized: Record<string, string[]> = { ...fieldErrors };
    if (formErrors.length) {
      normalized._form = formErrors;
    }
    return { success: false, errors: normalized };
  }

  const data = parsed.data;

  const updatePayload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    position: data.position,
    department: data.department,
    bio: data.bio ?? null,
    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : null,
  };

  try {
    await prisma.user.update({
      where: { id: userId },
      data: updatePayload,
    });
    return { success: true };
  } catch {
    return { success: false, errors: { _form: ['Failed to update profile'] } };
  }
}

// Server Action: retrieve user profile and map to form values
export async function getUserProfileAction(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      position: true,
      department: true,
      bio: true,
      dateOfBirth: true,
    },
  });

  if (!user) {
    return { success: false, error: 'User not found' } as const;
  }

  const initialValues: ProfileFormData = {
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    email: user.email ?? '',
    position: user.position ?? '',
    department: user.department ?? '',
    dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().slice(0, 10) : '',
    bio: user.bio ?? '',
  };

  return { success: true, data: initialValues } as const;
}
