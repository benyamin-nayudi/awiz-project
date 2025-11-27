import { z } from 'zod';

// Validation schema
export const profileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^[\d\s\-\+\(\)]+$/, 'Invalid phone number format'),
  position: z.string().min(2, 'Position must be at least 2 characters').max(100, 'Position must be less than 100 characters'),
  department: z.string().min(2, 'Department must be at least 2 characters').max(50, 'Department must be less than 50 characters'),
  location: z.string().min(2, 'Location must be at least 2 characters').max(100, 'Location must be less than 100 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

