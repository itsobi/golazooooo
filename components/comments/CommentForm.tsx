'use client';

import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { createComment } from '@/actions/comments/createComment';
import { SignInButton, useUser } from '@clerk/nextjs';
import { toast } from '../ui/use-toast';
import SendComment from './SendComment';

export default function CommentForm({
  postId,
  communityValue,
}: {
  postId: string;
  communityValue: string;
}) {
  const { user } = useUser();
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const createCommentWithNewValues = createComment.bind(
    null,
    postId,
    user?.id,
    communityValue
  );

  return showForm ? (
    <form
      ref={formRef}
      action={async (formData) => {
        const result = await createCommentWithNewValues(formData);

        if (result?.message) {
          toast({
            description: result.message,
          });
        } else {
          toast({
            description: result.error,
            variant: 'destructive',
          });
        }
        formRef.current?.reset();
      }}
      className="flex-col w-full lg:mt-4"
    >
      <textarea
        name="comment"
        className="w-full border rounded outline-none p-2"
      />
      <SendComment />
    </form>
  ) : user?.id ? (
    <Button className="mt-4" onClick={() => setShowForm(true)}>
      <Plus />
      Add a comment
    </Button>
  ) : (
    <SignInButton mode="modal">
      <Button>Sign in to comment</Button>
    </SignInButton>
  );
}
