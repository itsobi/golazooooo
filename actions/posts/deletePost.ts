'use server';

import { createClient } from '@/supabase/server';
import { revalidatePath } from 'next/cache';

export const deletePost = async (postId: number) => {
  if (!postId) throw new Error('Post ID is required to delete post');
  const supabase = createClient();

  try {
    const { error } = await supabase.from('posts').delete().eq('id', postId);

    if (error) {
      throw new Error(
        'There was an issue deleting the post. Please try again.'
      );
    }
    revalidatePath('/');
    return { message: 'Post deleted successfully.' };
  } catch (error: any) {
    return { error: error.message };
  }
};
