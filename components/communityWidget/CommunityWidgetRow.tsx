import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CommunityWidgetRowProps } from './CommunityWidget';
import Link from 'next/link';

export default function CommunityWidgetRow({ community }: { community: any }) {
  return (
    <Link
      href={`/community/${community.value}`}
      className="flex items-center space-x-2 hover:bg-gray-200 p-2 cursor-pointer"
    >
      <img
        src={community.image}
        alt={community.name}
        className="h-10 w-10 rounded-full"
      />
      <p>{community.name}</p>
    </Link>
  );
}
