import { Header } from '@/components/dashboard/header';
import { Main } from '@/components/dashboard/main';
import { Sidebar } from '@/components/dashboard/sidebar';

export default function Dashboard() {
  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <Sidebar />
      <div className='flex flex-col'>
        <Header />
        <Main />
      </div>
    </div>
  );
}
