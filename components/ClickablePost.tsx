import { Post } from './Post';
import { Star, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { SignUpButton, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function ClickablePost({ post }: { post: Post }) {
  const { title, body, created_at, image, username } = post;
  return (
    <Link href="/community">
      <div className="border-b space-y-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarFallback>
                {username.slice(1, 3).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm">{username}</p>
            <p className="text-xs font-light text-gray-400">
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
            <h4 className="font-bold text-2xl mb-1">{title}</h4>
            <div className="flex items-center text-blue-700 space-x-1">
              <p className="font-extralight">{post.community_label}</p>
              <Star size={16} />
            </div>
          </div>
          <p className="mb-4">{body}</p>
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-fit mb-6"
            />
          )}

          <ThumbsUp className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </Link>
  );
}
