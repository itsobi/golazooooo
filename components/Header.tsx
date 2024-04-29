import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 border-b shadow-sm mb-6">
      <p>Golazooooo</p>

      <form className="flex items-center rounded-full px-4 py-2 space-x-2 lg:w-[500px] bg-slate-50">
        <Search />
        <input
          placeholder="Search Golazooooo"
          type="text"
          className="outline-none bg-transparent"
        />
      </form>

      {/* user button / signIn button */}
      <p>button</p>
    </header>
  );
}
