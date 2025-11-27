'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, MapPin, Calendar, Briefcase, Phone } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Card } from '@/shared/ui/card';
import {
  profileSchema,
  ProfileFormData,
} from '@/features/dashboard/validator/dashboard-form.validation';

interface DashboardFormProps {
  isEditing: boolean;
  onSubmit: (data: ProfileFormData) => Promise<void>;
}

function DashboardForm({ isEditing, onSubmit }: DashboardFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      department: '',
      location: '',
      dateOfBirth: '',
      bio: '',
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
          <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
            <User className="mr-2 h-5 w-5 text-primary" />
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
          <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
            <Mail className="mr-2 h-5 w-5 text-primary" />
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
            <Input
              {...register('phone')}
              label="Phone Number"
              type="tel"
              disabled={!isEditing}
              leftIcon={<Phone className="h-4 w-4" />}
              error={errors.phone?.message}
            />
            <div className="md:col-span-2">
              <Input
                {...register('location')}
                label="Location"
                type="text"
                disabled={!isEditing}
                leftIcon={<MapPin className="h-4 w-4" />}
                error={errors.location?.message}
              />
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
            <Briefcase className="mr-2 h-5 w-5 text-primary" />
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
          <h2 className="mb-4 text-lg font-semibold text-foreground">About</h2>
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
