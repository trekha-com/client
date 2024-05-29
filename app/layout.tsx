import '@/app/globals.css';
import { SessionProvider } from '@/contexts/session-context';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={GeistSans.variable}>
        <SessionProvider>
          <main className='h-screen'>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
