'use server';

import { createClient } from '@/supabase/server';
import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export const createPost = async (
  communityValue: string,
  communityLabel: string,
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

  console.log('Creating post...');
  console.log('User ID:', userId);
  console.log('Username:', username);
  console.log('Title:', title);
  console.log('Body:', body);
  console.log('newCommunityValue:', newCommunityValue);
  console.log('Community Label:', communityLabel);

  try {
    // Check if the community exists
    const { data: community } = await supabase
      .from('communities')
      .select('*')
      .eq('value', newCommunityValue)
      .single();

    if (communityValue !== 'general' && !community) {
      const { data, error } = await supabase
        .from('communities')
        .insert([
          {
            value: newCommunityValue,
            label: communityLabel,
          },
        ])
        .select();
    }
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          body: body,
          image: image,
          title: title,
          clerk_user_id: userId,
          community_value: newCommunityValue,
          community_label: communityLabel,
          username: username,
        },
      ])
      .select();
    console.log('data:', data);
    console.log('error:', error);
    revalidatePath('/');
  } catch (error) {
    console.log(error);
  }
};
