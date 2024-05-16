import CommentRow from './CommentRow';
import { Comment } from './CommentRow';

export default function Comments({ comments }: { comments: Comment[] | null }) {
  return (
    <div className="mt-8">
      {comments?.map((comment) => (
        <CommentRow comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
