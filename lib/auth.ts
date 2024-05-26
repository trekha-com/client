import { COOKIE_NAME } from '@/constants';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const cookieStore = cookies();

interface UserResponse {
  user: object | null;
  error: AxiosError | null;
}

export async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('http://localhost:3300/api/auth/me', {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${cookieStore.get(COOKIE_NAME)?.value}` },
    });

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e as AxiosError;

    return {
      user: null,
      error,
    };
  }
}

export function logout() {
  cookieStore.delete(COOKIE_NAME);
  redirect('/login');
}
