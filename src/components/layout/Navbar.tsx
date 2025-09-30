// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CircleUser,
  Menu,
  BookUser,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { handleSignOut } from '@/lib/api/auth';
import { Sidebar } from './Sidebar'; // Re-using Sidebar for mobile

export function Navbar() {
  const router = useRouter();

  const onSignOut = async () => {
    await handleSignOut();
    router.push('/login');
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0">
          {/* We can re-use the sidebar component here for mobile view */}
           <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BookUser className="h-6 w-6" />
              <span>CampusLMS</span>
            </Link>
          </div>
          {/* A simplified nav for mobile could also be used */}
          {/* For now, just a placeholder message */}
           <div className="p-4">Mobile navigation links go here.</div>
        </SheetContent>
      </Sheet>

      <div className="w-full flex-1">
        {/* We can add Breadcrumbs or a Search bar here later */}
      </div>

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onSignOut}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
