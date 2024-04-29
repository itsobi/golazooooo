import { Search } from 'lucide-react';
import HeaderSearch from './HeaderSearch';
import { auth } from '@clerk/nextjs/server';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function Header() {
  const { userId } = auth();
  return (
    <header className="flex justify-between items-center py-6 px-4 border-b shadow-sm mb-6">
      <p>Golazooooo</p>

      <HeaderSearch />

      {/* user button / signIn button */}
      {userId ? (
        <UserButton />
      ) : (
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      )}
    </header>
  );
}
