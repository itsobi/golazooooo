import { Skeleton } from '@/components/ui/skeleton';

export default function CommunityPostsLoadingScreen() {
  return (
    <main className="max-w-4xl mx-auto w-full px-4 lg:px-0">
      <p className="text-center animate-pulse font-bold text-blue-700 pt-2">
        Grabbing the posts in this community. This should only take a few
        seconds...
      </p>
      <div className="flex justify-center py-10">
        <div className="w-10 h-10 bg-blue-700 animate-bounce rounded-full" />
      </div>
    </main>
  );
}
