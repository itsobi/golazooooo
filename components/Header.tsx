import { auth } from '@clerk/nextjs/server';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Header() {
  const { userId } = auth();
  return (
    <header className="flex justify-between items-center py-6 px-4 border-b shadow-sm mb-6">
      <Link href="/" className="text-blue-700 font-semibold flex-1">
        Golazooooo
      </Link>

      <div className="flex justify-center flex-1">
        <img
          src="https://m.media-amazon.com/images/I/61IkrxQ9p8L._AC_UF1000,1000_QL80_.jpg"
          alt="soccer ball"
          className="h-10 w-10"
        />
      </div>

      <div className="flex-1">
        {userId ? (
          <div className="flex items-center justify-end">
            <UserButton />
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </div>
        )}
      </div>
    </header>
  );
}
