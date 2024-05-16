'use client';

import { MessageCircleReply, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Comment } from './CommentRow';
import ReplyToCommentForm from './ReplyToCommentForm';
import { auth } from '@clerk/nextjs/server';

export default function ReplyToComment({
  comment,
  userId,
}: {
  comment: Comment;
  userId: string;
}) {
  const [showReplyToCommentForm, setShowReplyToCommentForm] = useState(false);
  return (
    <>
      {!showReplyToCommentForm && (
        <div className="flex items-center space-x-2">
          <button
            className="flex items-center space-x-1 hover:text-blue-700 mt-2"
            onClick={() => setShowReplyToCommentForm(true)}
          >
            <MessageCircleReply />
          </button>
          {comment.author === userId && (
            <button className="flex items-center space-x-1 hover:text-red-500 mt-2">
              <Trash2 />
            </button>
          )}
        </div>
      )}

      {showReplyToCommentForm && (
        <ReplyToCommentForm
          postId={comment.post_id}
          commentId={comment.id}
          communityValue={comment.community_value}
          setShowReplyToCommentForm={setShowReplyToCommentForm}
        />
      )}
    </>
  );
}
