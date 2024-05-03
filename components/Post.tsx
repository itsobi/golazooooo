import { ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

type Post = {
  id: string;
  title: string;
  body: string;
  created_at: string;
  image: string;
  community_values: string;
  clerk_user_id: string;
  likes: number;
  username: string;
};

export default function Post({ post }: { post: Post }) {
  const { title, body, image, community_values, likes, username, created_at } =
    post;
  return (
    <div className="border-b space-y-4 py-4">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarFallback>{username.slice(1, 3).toUpperCase()}</AvatarFallback>
        </Avatar>
        <p className="text-sm">{username}</p>
        <p className="text-xs font-light text-gray-400">
          {new Date(created_at as string).toLocaleDateString()}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-2xl mb-4">{title}</h4>
        <p className="mb-4">{body}</p>
        {image && (
          <img src={image} alt={title} className="w-full h-96 object-fit" />
        )}
        <ThumbsUp className="hover:text-green-400 cursor-pointer" />
      </div>
    </div>
  );
}
