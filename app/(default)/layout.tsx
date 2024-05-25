import { Sidebar } from '@/components/ui/sidebar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-screen'>
      <Sidebar />
      {children}
    </main>
  );
}
