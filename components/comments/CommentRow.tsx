import { Avatar, AvatarFallback } from '../ui/avatar';
import TimeAgoDate from '../post/TimeAgoDate';
import { auth } from '@clerk/nextjs/server';
import ReplyToCommentActions from './ReplyToCommentActions';
import ReplyToCommentRow from './ReplyToCommentRow';
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

  const { data, error } = await supabase
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
        {userId && <ReplyToCommentActions comment={comment} userId={userId} />}
      </div>
      {data && (
        <div className="pl-14">
          {data.map((replyToComment) => (
            <ReplyToCommentRow
              key={replyToComment.id}
              replyToComment={replyToComment}
            />
          ))}
        </div>
      )}
    </div>
  );
}
