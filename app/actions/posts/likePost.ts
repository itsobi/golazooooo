'use server';

import { createClient } from '@/supabase/server';

export const likePost = async (postId: number, clerkUserId: string) => {
  const supabase = createClient();

  if (!postId || !clerkUserId) return;

  console.log(`Liking post ${postId} for user ${clerkUserId}`);
};
