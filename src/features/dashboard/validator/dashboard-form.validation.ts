import { z } from 'zod';

// Validation schema
export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  position: z.string().max(100, 'Position must be less than 100 characters').optional(),
  department: z.string().max(50, 'Department must be less than 50 characters').optional(),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
