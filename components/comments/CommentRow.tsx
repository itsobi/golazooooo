import { Avatar, AvatarFallback } from '../ui/avatar';
import TimeAgoDate from '../post/TimeAgoDate';
import { auth } from '@clerk/nextjs/server';
import ReplyToCommentActions from './ReplyToCommentActions';
import { createClient } from '@/supabase/server';

export type Comment = {
  id: number;
  post_id: number;
  comment_id: number;
  created_at: string;
  author: string;
  text: string;
  username: string;
  community_value: string;
};

type Props = {
  comment: Comment;
  style?: string;
};

export default async function CommentRow({ comment, style }: Props) {
  const firstLetter = comment.username.charAt(1);
  const { userId } = auth();

  const supabase = createClient();

  const { data: commentReplies, error } = await supabase
    .from('comment_replies')
    .select('*')
    .eq('comment_id', comment.id);

  return (
    <div className={style ?? 'mt-8'}>
      <div className="flex items-center space-x-2" key={comment.id}>
        <Avatar>
          <AvatarFallback>{firstLetter}</AvatarFallback>
        </Avatar>
        <div className="flex items-center space-x-1">
          <p className="text-sm font-semibold">{comment.username}</p>
          <TimeAgoDate date={comment.created_at} />
        </div>
      </div>
      <div className="pl-12">
        <p>{comment.text}</p>
        {userId && (
          <ReplyToCommentActions
            comment={comment}
            commentReplies={commentReplies}
          />
        )}
      </div>
      {commentReplies &&
        commentReplies.length < 2 &&
        commentReplies.map((reply, index) => (
          <div key={index}>
            <div className="w-[2px] h-8 ml-6 border border-gray-300" />
            <div className="ml-6">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback>{firstLetter}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1 mb-2">
                    <p className="text-sm font-semibold">{comment.username}</p>
                    <TimeAgoDate date={reply.created_at} />
                  </div>
                  <p>{reply.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
