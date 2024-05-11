import { Post } from './Post';
import { Button } from '../ui/button';
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import LikeButton from '../LikeButton';
import { Badge } from '../ui/badge';
import { Ellipsis } from 'lucide-react';

export default function ClickablePost({ post }: { post: Post }) {
  const { title, body, created_at, image, username } = post;
  return (
    <Link
      href={{
        pathname: `post/${post.community_value}`,
        query: { postId: post.id },
      }}
    >
      <div className="border-b space-y-4 p-4 bg-gray-100 my-4 hover:bg-gray-200 transition duration-150">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 font-thin">
            <p className="text-sm">{username}</p>
            <p className="text-xs text-gray-400">
              {new Date(created_at as string).toLocaleDateString()}
            </p>
          </div>

          <SignedOut>
            <div>
              <SignUpButton mode="modal">
                <Button className="rounded-full">Join</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-xl mb-1">{title}</h4>
            <Badge className="bg-blue-700">{post.community_label}</Badge>
          </div>
          <p className="mb-4">{body}</p>
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-contain mb-6"
            />
          )}

          <LikeButton postId={post.id} clerkUserId={post.clerk_user_id} />
        </div>
      </div>
    </Link>
  );
}
