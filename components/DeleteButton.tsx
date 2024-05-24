'use client';

import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { toast } from './ui/use-toast';
import { deletePost } from '@/actions/posts/deletePost';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ postId }: { postId: number }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDeletePost = async (postId: number) => {
    setLoading(true);
    const result = await deletePost(postId);

    if (result.message) {
      toast({
        title: 'Success',
        description: result.message,
        variant: 'success',
      });
      setLoading(false);
      router.back();
    } else if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
      setLoading(false);
    }
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-semibold">Confirm Deletion</h4>
          <p className="font-light text-gray-400">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </p>
          <div className="flex space-x-2">
            <Button
              onClick={() => setOpen(false)}
              variant="secondary"
              size="sm"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleDeletePost(postId)}
              variant="destructive"
              size="sm"
              className="disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              Delete
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
