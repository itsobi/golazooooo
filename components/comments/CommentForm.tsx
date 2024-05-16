'use client';

import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { SignInButton, useUser } from '@clerk/nextjs';
import { toast } from '../ui/use-toast';
import SendComment from './SendComment';

type CommentFormProps = {
  postId: number;
  communityValue: string;
  serverAction: (
    postId: number,
    userId: string | undefined,
    communityValue: string,
    formData: FormData
  ) => Promise<
    | {
        message: string;
        error?: undefined;
      }
    | {
        error: any;
        message?: undefined;
      }
  >;
};

export default function CommentForm({
  postId,
  communityValue,
  serverAction,
}: CommentFormProps) {
  const { user } = useUser();
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return showForm ? (
    <form
      ref={formRef}
      action={async (formData) => {
        const result = await serverAction(
          postId,
          user?.id,
          communityValue,
          formData
        );

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
        setShowForm(false);
      }}
      className="flex-col w-full lg:mt-4"
    >
      <div className="border rounded">
        <textarea
          name="comment"
          className="w-full outline-none p-2 min-h-10"
          placeholder="Insert comment here"
        />
        <div className="flex items-center space-x-2 justify-end p-1">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </Button>
          <SendComment />
        </div>
      </div>
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
