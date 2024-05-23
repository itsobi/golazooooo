'use server';

import { createClient } from '@/supabase/server';

export const deletePost = async (postId: number) => {
  if (!postId) throw new Error('Post ID is required to delete post');
  const supabase = createClient();

  try {
    // const { error } = await supabase
    //   .from('posts')
    //   .delete()
    //   .eq('post_id', postId);

    // if (error)
    //   throw new Error('There was an issue delete the post. Please try again.');

    // return { message: 'Post deleted successfully' };

    console.log('postId', postId);
  } catch (error: any) {
    return { error: error.message };
  }
};
