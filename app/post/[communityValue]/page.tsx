import BackButton from '@/components/BackButton';
import CommentSection from '@/components/CommentSection';
import { createClient } from '@/supabase/server';

export default async function Post({
  params,
  searchParams,
}: {
  params: { communityValue: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createClient();

  // query the database for posts with the community_value and post_id
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('community_value', params.communityValue)
    .eq('id', searchParams.postId);

  console.log(post?.[0].created_at);

  return (
    <main className="bg-green-100 max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <BackButton />
      </div>

      <div className="flex space-x-2 text-sm font-thin">
        <p>
          <p>{post?.[0].username}</p>
        </p>
        <p>
          <p>{new Date(post?.[0].created_at).toLocaleDateString()}</p>
        </p>
      </div>
      <div className="flex-col space-y-4">
        <h1 className="font-semibold text-xl">{post?.[0].title}</h1>
        <p>{post?.[0].body}</p>
        {post?.[0].image && (
          <img
            src={post?.[0].image}
            alt={post?.[0].title}
            className="w-full h-96 object-fit mb-6"
          />
        )}
      </div>

      <CommentSection />
    </main>
  );
}
