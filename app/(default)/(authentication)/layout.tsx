import { getUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AuthenticationLayout({ children }: { children: React.ReactNode }) {
  const { user, error } = await getUser();

  if (user) {
    redirect('/dashboard');
  }

  return <>{children}</>;
}
