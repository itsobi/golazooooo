'use client';

import { Dispatch, SetStateAction, useRef } from 'react';
import { toast } from '../ui/use-toast';
import { Button } from '../ui/button';
import SendComment from './SendComment';
import { createReplyToComment } from '@/actions/comments/createReplyToComment';

type ReplyToCommentFormProps = {
  postId: number;
  commentId: number;
  communityValue: string;
  setShowReplyToCommentForm: Dispatch<SetStateAction<boolean>>;
};

export default function ReplyToCommentForm({
  postId,
  commentId,
  communityValue,
  setShowReplyToCommentForm,
}: ReplyToCommentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const replyToComment = createReplyToComment.bind(
    null,
    postId,
    commentId,
    communityValue
  );

  return (
    <form
      action={async (formData: FormData) => {
        const result = await replyToComment(formData);
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
        setShowReplyToCommentForm(false);
      }}
      ref={formRef}
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
            onClick={() => setShowReplyToCommentForm(false)}
          >
            Cancel
          </Button>
          <SendComment />
        </div>
      </div>
    </form>
  );
}
