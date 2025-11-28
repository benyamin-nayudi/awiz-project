import DashboardContainer from '@/features/dashboard/ui';
import { getUserProfileAction } from '@/features/dashboard/actions/user-actions';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Dashboard | Awiz',
  description: 'Personal dashboard area to view and manage your Awiz activity and profile.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://awiz.dev/dashboard',
    title: 'User Dashboard | Awiz',
    description: 'Manage your Awiz profile and activity.',
    images: [
      {
        url: 'https://awiz.dev/og/dashboard-og.png',
        width: 1200,
        height: 630,
        alt: 'Awiz User Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'User Dashboard | Awiz',
    description: 'Manage your Awiz profile and activity.',
  },
};

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
