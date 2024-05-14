import CommentRow from './CommentRow';

type Comment = {
  id: number;
  post_id: number;
  created_at: string;
  author: string;
  text: string;
  username: string;
};

export default function Comments({ comments }: { comments: Comment[] | null }) {
  return (
    <div className="mt-8">
      {comments?.map((comment) => (
        <CommentRow comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
