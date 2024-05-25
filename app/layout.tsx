import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn(GeistSans.variable, 'h-screen bg-gray-50 font-sans')}>{children}</body>
    </html>
  );
}
