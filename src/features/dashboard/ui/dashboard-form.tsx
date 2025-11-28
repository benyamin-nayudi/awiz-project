'use client';

import {
  ProfileFormData,
  profileSchema,
} from '@/features/dashboard/validator/dashboard-form.validation';
import { Card } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Briefcase, Calendar, Mail, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface DashboardFormProps {
  isEditing: boolean;
  onSubmit: (data: ProfileFormData) => Promise<void>;
  initialValues?: Partial<ProfileFormData>;
}

function DashboardForm({ isEditing, onSubmit, initialValues }: DashboardFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: initialValues?.firstName ?? '',
      lastName: initialValues?.lastName ?? '',
      email: initialValues?.email ?? '',
      position: initialValues?.position ?? '',
      department: initialValues?.department ?? '',
      dateOfBirth: initialValues?.dateOfBirth ?? '',
      bio: initialValues?.bio ?? '',
    },
  });

  const handleFormSubmit = async (data: ProfileFormData) => {
    await onSubmit(data);
  };

  return (
    <Card>
      <form id="profile-form" onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 p-6">
        {/* Personal Information */}
        <div>
          <h2 className="text-foreground mb-4 flex items-center text-lg font-semibold">
            <User className="text-primary mr-2 h-5 w-5" />
            Personal Information
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              {...register('firstName')}
              label="First Name"
              type="text"
              disabled={!isEditing}
              error={errors.firstName?.message}
            />
            <Input
              {...register('lastName')}
              label="Last Name"
              type="text"
              disabled={!isEditing}
              error={errors.lastName?.message}
            />
            <Input
              {...register('dateOfBirth')}
              label="Date of Birth"
              type="date"
              disabled={!isEditing}
              leftIcon={<Calendar className="h-4 w-4" />}
              error={errors.dateOfBirth?.message}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-foreground mb-4 flex items-center text-lg font-semibold">
            <Mail className="text-primary mr-2 h-5 w-5" />
            Contact Information
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              {...register('email')}
              label="Email Address"
              type="email"
              disabled={!isEditing}
              leftIcon={<Mail className="h-4 w-4" />}
              error={errors.email?.message}
            />
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h2 className="text-foreground mb-4 flex items-center text-lg font-semibold">
            <Briefcase className="text-primary mr-2 h-5 w-5" />
            Professional Information
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              {...register('position')}
              label="Position"
              type="text"
              disabled={!isEditing}
              error={errors.position?.message}
            />
            <Input
              {...register('department')}
              label="Department"
              type="text"
              disabled={!isEditing}
              error={errors.department?.message}
            />
          </div>
        </div>

        {/* Bio Section */}
        <div>
          <h2 className="text-foreground mb-4 text-lg font-semibold">About</h2>
          <Textarea
            {...register('bio')}
            label="Bio"
            rows={4}
            disabled={!isEditing}
            placeholder="Tell us about yourself..."
            error={errors.bio?.message}
          />
        </div>
      </form>
    </Card>
  );
}

export default DashboardForm;
export type { ProfileFormData };
