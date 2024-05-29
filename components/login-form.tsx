'use client';

import { useSession } from '@/contexts/session-context';
import { User } from '@/interfaces/user';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginResponse {
  data: {
    message: string;
    user: User | null;
    token: string | null;
  };
}

export function LoginForm() {
  const { push } = useRouter();
  const { setSession } = useSession();

  const handleSubmit = async (formData: FormData) => {
    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const { data }: LoginResponse = await axios.post('http://localhost:3300/api/auth/login', payload);

      if (data.token && data.user) {
        setSession({ user: data.user, token: data.token });
      }

      push('/');
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);
    }
  };

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' name='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </div>
        </form>
        <div className='mt-4 text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/register' className='underline'>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
