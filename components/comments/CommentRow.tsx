import { Avatar, AvatarFallback } from '../ui/avatar';
import TimeAgoDate from '../post/TimeAgoDate';
import ReplyToCommentForm from './ReplyToCommentForm';

export type Comment = {
  id: number;
  post_id: number;
  created_at: string;
  author: string;
  text: string;
  username: string;
};

export default function CommentRow({ comment }: { comment: Comment }) {
  const firstLetter = comment.username.charAt(1);
  console.log('comment', comment);
  return (
    <div>
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
        <ReplyToCommentForm />
      </div>
    </div>
  );
}
