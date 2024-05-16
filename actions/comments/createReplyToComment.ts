'use server';

import { createClient } from '@/supabase/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export const createReplyToComment = async (
  postId: number,
  comment_id: number,
  communityValue: string,
  formData: FormData
) => {
  auth().protect();
  const { userId } = auth();
  const comment = (formData.get('comment') as string).trim();

  if (!userId) throw new Error('User ID is required');
  if (!comment) throw new Error('Comment is required');
  if (!comment_id) throw new Error('Comment ID is required');

  const supabase = createClient();

  try {
    const user = await currentUser();
    const username = `@${
      user?.primaryEmailAddress?.emailAddress.split('@')[0]
    }-${user?.id.slice(-4)}`;

    const { data, error } = await supabase
      .from('comment_replies')
      .insert([
        {
          author: userId,
          post_id: postId,
          comment_id: comment_id,
          text: comment,
          username: username,
          community_value: communityValue,
        },
      ])
      .select();

    if (error)
      throw new Error(
        'There was an error creating the comment. Please try again.'
      );

    revalidatePath(`/post/${communityValue}/${postId}`);

    return { message: 'Comment created successfully!' };
  } catch (error: any) {
    return { error: error.message };
  }
};
