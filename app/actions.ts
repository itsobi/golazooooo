'use server';

import { auth } from '@clerk/nextjs/server';

export const createPost = (prevState: any, formData: FormData) => {
  auth().protect();

  const title = formData.get('title');
  const community = Number(formData.get('community')) || 1;
  const body = formData.get('body');
  const image = formData.get('image');

  if (!title) {
    return {
      message: 'Title is required',
    };
  }

  if (!body) {
    return {
      message: 'Body is required',
    };
  }

  console.log(
    'Creating post with title:',
    title,
    'community:',
    community,
    'body:',
    body,
    'image:',
    image
  );
};
