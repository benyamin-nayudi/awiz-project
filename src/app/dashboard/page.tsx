'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Upload } from 'lucide-react';
import DashboardForm from '@/features/dashboard/ui/form/dashboard-form';
import { ProfileFormData } from '@/features/dashboard/validator/dashboard-form.validation';
import DashboardHeaderButtons from '@/features/dashboard/ui/dashboard-header-buttons';
import { Card } from '@/shared/ui/card';

export default function DashboardPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleFormSubmit = async (data: ProfileFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Profile updated:', data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <Card className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6">
            <div className="flex items-center space-x-4">
              {/* profile image */}
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-muted">
                  {profileImage ? (
                    <Image
                      src={profileImage}
                      alt="Profile"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                {isEditing && (
                  <label className="absolute -right-2 -bottom-2 cursor-pointer rounded-full bg-blue-500 p-1 text-white transition-colors hover:bg-blue-600">
                    <Upload className="h-4 w-4" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div>
                <h1 className="text-2xl font-bold text-foreground">Profile Dashboard</h1>
                <p className="text-muted-foreground">Manage your personal information</p>
              </div>
            </div>

            {/* save/edit/cancel buttons */}
            <DashboardHeaderButtons
              isEditing={isEditing}
              onEditClick={() => setIsEditing(true)}
              onCancelClick={handleCancel}
              onSaveClick={() => {
                const form = document.getElementById('profile-form') as HTMLFormElement;
                if (form) form.requestSubmit();
              }}
            />
          </div>
        </Card>

        {/* Profile Form */}
        <DashboardForm isEditing={isEditing} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}
