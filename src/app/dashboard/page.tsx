import DashboardContainer from '@/features/dashboard/ui';
import { getUserProfileAction } from '@/features/dashboard/actions/user-actions';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // Fetch user profile data on the server side

  const userId = 'test'; // for this mini project we use a static user ID
  const userProfileData = await getUserProfileAction(userId);

  if (!userProfileData.data) {
    return <div className="p-8 text-center">Failed to load user profile.</div>;
  } else {
    return <DashboardContainer userData={userProfileData.data} />;
  }
}
