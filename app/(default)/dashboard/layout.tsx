import { getUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, error } = await getUser();

  if (error) {
    redirect('/login');
  }

  return <>{children}</>;
}
