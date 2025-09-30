// src/app/(auth)/signup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { handleSignUp } from '@/lib/api/auth';
import Link from 'next/link';


export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await handleSignUp({ email, password, fullName });
      alert('Success! Please check your email to confirm your account.');
      router.push('/login');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
       <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-xl">
         <div className="text-center">
            <h1 className="text-3xl font-bold">Create Your Account</h1>
            <p className="text-muted-foreground">Get started with CampusLMS today.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          {error && <p className="text-sm text-center text-destructive">{error}</p>}
        </form>
         <p className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold underline text-primary">
              Sign in
            </Link>
          </p>
      </div>
    </div>
  );
}
