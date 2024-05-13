'use client';

import ReactTimeAgo from 'react-timeago';

export default function TimeAgoDate({ date }: { date: string }) {
  return (
    <p className="text-xs text-gray-400">
      <ReactTimeAgo date={new Date(date)} />
    </p>
  );
}
