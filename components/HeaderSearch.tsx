import { Search } from 'lucide-react';

export default function HeaderSearch() {
  return (
    <form className="flex items-center rounded-full px-4 py-2 space-x-2 bg-slate-50">
      <Search />
      <input
        placeholder="Search Golazooooo"
        type="text"
        className="outline-none bg-transparent w-full"
      />
    </form>
  );
}
