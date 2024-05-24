import { createComment } from '@/actions/comments/createComment';
import BackButton from '@/components/BackButton';
import DeleteButton from '@/components/DeleteButton';
import CommentForm from '@/components/comments/CommentForm';
import Comments from '@/components/comments/Comments';
import TimeAgoDate from '@/components/post/TimeAgoDate';
import { createClient } from '@/supabase/server';
import { SignedIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import React from 'react';

export default async function GeneralPost({
  params,
}: {
  params: { postId: number };
}) {
  const { userId } = auth();
  const supabase = createClient();
  // query the database for posts with the community_value and post_id
  const { data: post, error: postError } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.postId);

  const { data: comments, error: commentsError } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', params.postId)
    .order('created_at', { ascending: false });
  return (
    <main className="max-w-4xl mx-auto w-full px-4 lg:px-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BackButton />
          <p className="text-sm font-semibold">{post?.[0]?.username}</p>
          <TimeAgoDate date={post?.[0]?.created_at} />
        </div>
        <SignedIn>
          {userId === post?.[0].author && (
            <DeleteButton postId={post?.[0]?.id} />
          )}
        </SignedIn>
      </div>
      <div className="flex-col space-y-4 pb-4">
        <h1 className="font-semibold text-2xl">{post?.[0]?.title}</h1>
        <p>{post?.[0].body}</p>
        {post?.[0].image && (
          <img
            src={post?.[0].image}
            alt={post?.[0].title}
            className="object-contain mb-6"
          />
        )}
      </div>

      <div className="mb-10">
        <CommentForm postId={post?.[0].id} serverAction={createComment} />
        <Comments comments={comments} />
      </div>
    </main>
  );
}
