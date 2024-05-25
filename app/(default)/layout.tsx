import { Siderbar } from '@/components/ui/Sidebar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Siderbar />
      {children}
    </>
  );
}
