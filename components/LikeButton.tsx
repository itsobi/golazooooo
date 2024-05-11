'use client';

import { likePost } from '@/actions/posts/likePost';
import { ThumbsUp } from 'lucide-react';

export default function LikeButton({
  postId,
  clerkUserId,
}: {
  postId: number;
  clerkUserId: string;
}) {
  return (
    <ThumbsUp
      className="hover:text-blue-700 cursor-pointer"
      onClick={() => likePost(postId, clerkUserId)}
    />
  );
}
