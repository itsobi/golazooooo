'use client';

import { CirclePlus, MessageCircleReply } from 'lucide-react';
import { useState } from 'react';
import CommentRow, { Comment } from './CommentRow';
import ReplyToCommentForm from './ReplyToCommentForm';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import TimeAgoDate from '../post/TimeAgoDate';
import { Avatar, AvatarFallback } from '../ui/avatar';

export default function ReplyToCommentActions({
  comment,
  commentReplies,
}: {
  comment: Comment;
  commentReplies: Comment[] | null;
}) {
  const [showReplyToCommentForm, setShowReplyToCommentForm] = useState(false);
  return (
    <>
      {!showReplyToCommentForm && (
        <div className="flex items-center space-x-2 mt-1">
          {commentReplies && commentReplies.length > 1 && (
            <>
              <div className="absolute">
                <Popover>
                  <PopoverTrigger asChild>
                    <CirclePlus className="cursor-pointer hover:text-[#1DA1F2]" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="flex flex-col space-y-2">
                      {commentReplies.map((reply, i) => {
                        const firstLetter = comment.username.charAt(1);
                        return (
                          <div key={i}>
                            <div className="flex items-center space-x-2">
                              <Avatar>
                                <AvatarFallback>{firstLetter}</AvatarFallback>
                              </Avatar>
                              <div className="flex items-center space-x-1">
                                <p className="text-sm font-semibold">
                                  {comment.username}
                                </p>
                                <TimeAgoDate date={reply.created_at} />
                              </div>
                            </div>
                            <p className="pl-12">{reply.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="relative h-4 w-4 bg-[#1DA1F2] rounded-full bottom-2 left-2 flex justify-center items-center text-white text-xs">
                <p>{commentReplies.length}</p>
              </div>
            </>
          )}
          <MessageCircleReply
            onClick={() => setShowReplyToCommentForm(true)}
            className="hover:text-[#1DA1F2] cursor-pointer"
          />
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
