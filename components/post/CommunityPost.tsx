import { Post } from './Post';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import TimeAgoDate from './TimeAgoDate';

export default function CommunityPost({ post }: { post: Post }) {
  const { title, body, created_at, image, username } = post;
  return (
    <Link
      href={{
        pathname: `/post/${post.community_value}`,
        query: { postId: post.id },
      }}
    >
      <div className="border-b space-y-4 p-4 bg-gray-100 my-4 hover:bg-gray-200 transition duration-150">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 font-thin">
            <p className="text-sm">{username}</p>
            <TimeAgoDate date={created_at} />
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
            <h4 className="font-semibold text-xl mb-1">{title}</h4>
            <Badge className="bg-blue-700 mb-2 lg:mb-0 w-fit">
              {post.community_label}
            </Badge>
          </div>
          <p className="mb-4">{body}</p>
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-contain mb-6"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
