import BackButton from '@/components/BackButton';
import DeleteButton from '@/components/DeleteButton';
import CommentForm from '@/components/comments/CommentForm';
import Comments from '@/components/comments/Comments';
import TimeAgoDate from '@/components/post/TimeAgoDate';
import { createClient } from '@/supabase/server';
import { SignedIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default async function Post({
  params,
  searchParams,
}: {
  params: { communityValue: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { userId } = auth();
  const supabase = createClient();

  // query the database for posts with the community_value and post_id
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('community_value', params.communityValue)
    .eq('id', searchParams.postId);

  return (
    <main className="max-w-4xl mx-auto w-full px-4 lg:px-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BackButton />
          <p>{post?.[0].username}</p>
          <TimeAgoDate date={post?.[0].created_at} />
        </div>
        <SignedIn>{userId === post?.[0].author && <DeleteButton />}</SignedIn>
      </div>
      <div className="flex-col space-y-4 pb-4">
        <h1 className="font-semibold text-2xl">{post?.[0].title}</h1>
        <p>{post?.[0].body}</p>
        {post?.[0].image && (
          <img
            src={post?.[0].image}
            alt={post?.[0].title}
            className="object-contain mb-6"
          />
        )}
      </div>

      <div className="space-y-4">
        <CommentForm
          postId={post?.[0].id}
          communityValue={params.communityValue}
        />
        <Comments />
      </div>
    </main>
  );
}
