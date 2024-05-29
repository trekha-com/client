'use client';

import { useSession } from '@/contexts/session-context';

export default function DefaultLayout({ landing, dashboard }: { [page: string]: React.ReactNode }) {
  const { session } = useSession();

  return session.user ? dashboard : landing;
}
