import Link from 'next/link';
import { Post } from './Post';
import TimeAgoDate from './TimeAgoDate';

export default function GeneralPost({ post }: { post: Post }) {
  const { id, title, body, created_at, image, username } = post;
  return (
    <Link
      href={{
        pathname: `/post/general/${id}`,
      }}
    >
      <div className="border-b space-y-4 p-4 bg-gray-100 my-4 hover:bg-gray-200 transition duration-150">
        <div className="flex items-center justify-between font-thin">
          <div className="flex items-center space-x-2">
            <p className="text-sm">{username}</p>
            <TimeAgoDate date={created_at} />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl mb-1">{title}</h4>
          </div>
          <p className="mb-4">{body}</p>
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-fit mb-6"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
