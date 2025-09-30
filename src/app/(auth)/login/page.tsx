// src/app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { handleSignIn } from '@/lib/api/auth';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await handleSignIn(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-xl">
        <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-muted-foreground">Sign in to access your dashboard.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          {error && <p className="text-sm text-center text-destructive">{error}</p>}
        </form>
         <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{' '}
            <Link href="/signup" className="font-semibold underline text-primary">
              Sign up
            </Link>
          </p>
      </div>
    </div>
  );
}
