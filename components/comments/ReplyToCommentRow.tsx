import CommentRow from './CommentRow';

type ReplyToComment = {
  id: number;
  created_at: string;
  author: string;
  comment_id: number;
  text: string;
  username: string;
  post_id: number;
  community_value: string;
};

export default function ReplyToCommentRow({
  replyToComment,
}: {
  replyToComment: ReplyToComment;
}) {
  return (
    <div className="mt-2">
      <div className="w-[2px] h-8 bg-blue-700" />
      {/* <div>
        <p>ReplyToCommentRow123</p>
      </div> */}
      <CommentRow comment={replyToComment} style="mt-0" />
    </div>
  );
}
