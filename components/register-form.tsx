'use client';

import { useSession } from '@/contexts/session-context';
import { User } from '@/interfaces/user';
import axios from '@/lib/axios';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RegisterResponse {
  data: {
    message: string;
    user: User | null;
    token: string | null;
  };
}

export function RegisterForm() {
  const { push } = useRouter();
  const { setSession } = useSession();

  const handleSubmit = async (formData: FormData) => {
    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
      username: formData.get('username'),
    };

    console.log(payload);

    try {
      const { data }: RegisterResponse = await axios.post('/auth/register', payload);

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
        <CardTitle className='text-xl'>Sign Up</CardTitle>
        <CardDescription>Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit}>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='last-name'>Username</Label>
              <Input id='username' name='username' placeholder='Robinson' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' name='email' type='email' placeholder='m@example.com' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' name='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Create an account
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/login' className='underline'>
              Sign in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
