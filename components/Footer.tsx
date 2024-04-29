import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-auto sticky bottom-0">
      <p className="text-xs text-slate-300">
        Brought to you by {''}
        <Link
          href="https://www.justobii.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-400 hover:text-slate-500 hover:underline"
        >
          justobii.com
        </Link>
      </p>
    </div>
  );
}
