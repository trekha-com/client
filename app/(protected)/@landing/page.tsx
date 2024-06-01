import Link from 'next/link';

export default function Landing() {
  return (
    <div>
      <div className='flex items-center gap-3'>
        <Link href='/login' className='hover:underline'>
          Login
        </Link>
        <Link href='/register' className='hover:underline'>
          Register
        </Link>
      </div>
      <h1>Landing page</h1>
    </div>
  );
}
