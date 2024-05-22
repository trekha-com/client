import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className={cn(GeistSans.variable, 'font-sans h-full')}>{children}</body>
    </html>
  );
}
