import { Skeleton } from '@/components/ui/skeleton';

export default function CommunityPostsLoadingScreen() {
  return (
    <main className="max-w-4xl mx-auto w-full px-4 lg:px-0">
      <p className="text-center animate-pulse font-bold text-blue-700 pt-10">
        Grabbing the posts in this community. This should only take a few...
      </p>
      <div className="flex justify-center py-10">
        <div className="w-10 h-10 bg-blue-700 animate-bounce rounded-full" />
      </div>
      <div className="flex items-center space-x-2 text-sm font-thin pb-4">
        <Skeleton className="h-10 w-10 rounded-full" />

        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div>
        <Skeleton className="h-screen w-full" />
      </div>
    </main>
  );
}
