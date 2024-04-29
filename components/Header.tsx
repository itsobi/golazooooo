import { Search } from 'lucide-react';
import HeaderSearch from './HeaderSearch';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 border-b shadow-sm mb-6">
      <p>Golazooooo</p>

      <HeaderSearch />

      {/* user button / signIn button */}
      <p>button</p>
    </header>
  );
}
