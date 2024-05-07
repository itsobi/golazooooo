import HeaderSearch from './HeaderSearch';
import { auth } from '@clerk/nextjs/server';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

export default function Header() {
  const { userId } = auth();
  return (
    <header className="grid grid-cols-6 py-6 px-4 border-b shadow-sm mb-6 z-50 bg-white">
      <p className="col-span-2 flex justify-start items-center">Golazooooo</p>

      <div className="col-span-2">
        <HeaderSearch />
      </div>

      {userId ? (
        <div className="col-span-2 flex justify-end">
          <UserButton />
        </div>
      ) : (
        <div className="col-span-2 flex justify-end">
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </div>
      )}
    </header>
  );
}
