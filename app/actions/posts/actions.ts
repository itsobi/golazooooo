'use server';

import { createClient } from '@/supabase/server';
import { auth } from '@clerk/nextjs/server';

export const createPost = async (
  communityValue: string,
  username: string,
  formData: FormData
) => {
  const { userId } = auth();

  const supabase = createClient();

  const title = (formData.get('title') as string).trim();
  const body = (formData.get('body') as string).trim();
  const image = formData.get('image');
  const newCommunityValue = communityValue ? communityValue : 'general';

  if (!userId) throw new Error('User is not authenticated');

  if (!title) throw new Error('Title is required');

  if (!body) throw new Error('Body is required');

  try {
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          body: body,
          image: image,
          title: title,
          clerk_user_id: userId,
          community_value: newCommunityValue,
          username: username,
        },
      ])
      .select();
  } catch (error) {
    console.log(error);
  }
};
