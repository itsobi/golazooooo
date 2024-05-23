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

export default function DeleteButton({ postId }: { postId: number }) {
  const [open, setOpen] = useState(false);

  // console.log(postId)
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
              onClick={() => deletePost(postId)}
              variant="destructive"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
