'use server';

import { createClient } from '@/supabase/server';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export const createPost = async (
  communityValue: string,
  communityLabel: string,
  username: string,
  image: string,
  formData: FormData
) => {
  const { userId } = auth();

  const supabase = createClient();

  const title = (formData.get('title') as string).trim();
  const body = (formData.get('body') as string).trim();
  const newCommunityValue = communityValue ? communityValue : 'general';
  const newCommunityLabel = communityLabel ? communityLabel : 'General';

  if (!userId) throw new Error('User is not authenticated');

  if (!title) throw new Error('Title is required');

  if (!body) throw new Error('Body is required');

  try {
    // Check if the community exists
    const { data: community } = await supabase
      .from('communities')
      .select('*')
      .eq('value', newCommunityValue)
      .single();

    // creating row in communities table that is NOT general
    if (communityValue !== 'general' && !community) {
      const { error: communityValueError } = await supabase
        .from('communities')
        .insert({
          value: newCommunityValue,
          label: communityLabel,
        })
        .select();

      if (communityValueError)
        throw new Error(
          'There was an error creating the community. Please try again.'
        );
    }

    // Create the post
    const { data: post, error: postError } = await supabase
      .from('posts')
      .insert({
        body: body,
        image: image,
        title: title,
        clerk_user_id: userId,
        community_value: newCommunityValue,
        community_label: newCommunityLabel,
        username: username,
      })
      .select();

    if (postError)
      throw new Error(
        'There was an error creating the post. Please try again.'
      );

    console.log('POST WAS CREATED!');
    revalidatePath('/');
    return {
      message: 'Post created successfully!',
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
