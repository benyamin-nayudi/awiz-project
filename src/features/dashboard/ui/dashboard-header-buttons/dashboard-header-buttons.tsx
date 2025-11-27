import { Edit2, Save, X } from 'lucide-react';
import { Button } from '@/shared/ui/button';

export interface DashboardHeaderButtonsProps {
  isEditing: boolean;
  onEditClick: () => void;
  onCancelClick: () => void;
  onSaveClick: () => void;
}

export default function DashboardHeaderButtons({
  isEditing,
  onEditClick,
  onCancelClick,
  onSaveClick,
}: DashboardHeaderButtonsProps) {
  return (
    <div className="mt-4 sm:mt-0">
      {!isEditing ? (
        <div className="inline-flex items-center">
          <Button
            icon={<Edit2 className="mr-2 h-4 w-4" />}
            primary={true}
            size="medium"
            label="Edit Profile"
            onClick={onEditClick}
          />
        </div>
      ) : (
        <div className="flex space-x-2">
          <div className="inline-flex items-center">
            <Button
              icon={<X className="mr-2 h-4 w-4" />}
              primary={false}
              size="medium"
              label="Cancel"
              onClick={onCancelClick}
              backgroundColor="#6b7280"
            />
          </div>
          <div className="inline-flex items-center">
            <Button
              icon={<Save className="mr-2 h-4 w-4" />}
              primary={true}
              size="medium"
              label="Save Changes"
              onClick={onSaveClick}
              backgroundColor="#10b981"
            />
          </div>
        </div>
      )}
    </div>
  );
}