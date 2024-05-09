import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-auto sticky bottom-0 hidden xl:inline-flex bg-transparent">
      <p className="text-xs text-slate-400 ml-2 mb-2">
        Brought to you by: {''}
        <Link
          href="https://www.justobii.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 hover:text-slate-500 hover:underline"
        >
          justobii.com
        </Link>
      </p>
    </div>
  );
}
