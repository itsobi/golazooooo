import { Skeleton } from '@/components/ui/skeleton';

export default function CommunityPostsLoadingScreen() {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 lg:px-0">
      <div className="flex items-center space-x-2 text-sm font-thin pb-4">
        <Skeleton className="h-10 w-10 rounded-full" />

        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div>
        <Skeleton className="h-screen w-full" />
      </div>
    </div>
  );
}
