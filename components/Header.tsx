import { auth } from '@clerk/nextjs/server';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Header() {
  const { userId } = auth();
  return (
    <header className="flex justify-between items-center py-6 px-4 border-b shadow-sm mb-6">
      <Link href="/" className="text-blue-700 font-semibold">
        Golazooooo
      </Link>

      <img
        src="https://m.media-amazon.com/images/I/61IkrxQ9p8L._AC_UF1000,1000_QL80_.jpg"
        alt="soccer ball"
        className="h-10 w-10"
      />

      {userId ? (
        <div className="">
          <UserButton />
        </div>
      ) : (
        <div className="">
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
        </div>
      )}
    </header>
  );
}
