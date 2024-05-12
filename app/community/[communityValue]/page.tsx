import BackButton from '@/components/BackButton';
import ClickablePost from '@/components/post/ClickablePost';
import { Button } from '@/components/ui/button';
import { createClient } from '@/supabase/server';

export default async function CommunityPosts({
  params,
}: {
  params: { communityValue: string };
}) {
  const supabase = createClient();

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('community_value', params.communityValue);

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-0">
      {posts?.length ? (
        <div className="flex items-center space-x-2">
          <BackButton />
          <h2 className="font-semibold text-2xl">{posts[0].community_label}</h2>
        </div>
      ) : null}
      {posts?.length ? (
        posts.map((post) => <ClickablePost key={post.id} post={post} />)
      ) : (
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl">
            There are no posts in this community
          </h2>
          <div className="flex justify-center">
            <BackButton />
          </div>
        </div>
      )}
    </div>
  );
}
