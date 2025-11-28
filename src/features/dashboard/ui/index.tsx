'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';

import { updateUserProfileAction } from '@/features/dashboard/actions/user-actions';
import DashboardHeaderButtons from '@/features/dashboard/ui/dashboard-header-buttons';
import DashboardForm from '@/features/dashboard/ui/dashboard-form';
import { ProfileFormData } from '@/features/dashboard/validator/dashboard-form.validation';
import { Card } from '@/shared/ui/card';

export default function DashboardContainer({ userData }: { userData: ProfileFormData }) {
  const [isEditing, setIsEditing] = useState(false);
  // Profile image storage removed; using static placeholder icon.

  const handleFormSubmit = async (data: ProfileFormData) => {
    try {
      const userId = 'test'; // for this mini project we use a static user ID

      const result = await updateUserProfileAction(userId, data);
      if (!result.success) {
        // Show a basic toast/alert for now. Integrate your UI toast system if available.
        const message = result.errors?._form?.[0] ?? 'Please fix the highlighted fields.';
        alert(`Update failed: ${message}`);
        console.error('Update errors:', result.errors);
        return;
      }

      alert('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Unexpected error updating profile');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-background min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <Card className="mb-8">
          <div className="flex flex-col p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-4">
              {/* profile image */}
              <div className="bg-muted flex h-20 w-20 items-center justify-center overflow-hidden rounded-full">
                <User className="text-muted-foreground h-8 w-8" />
              </div>

              <div>
                <h1 className="text-foreground text-2xl font-bold">Profile Dashboard</h1>
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
        <DashboardForm
          isEditing={isEditing}
          onSubmit={handleFormSubmit}
          initialValues={userData ?? undefined}
        />
      </div>
    </div>
  );
}
