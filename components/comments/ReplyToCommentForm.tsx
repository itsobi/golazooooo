'use client';

import { MessageCircleReply } from 'lucide-react';
import { useState } from 'react';
import CommentForm from './CommentForm';

export default function ReplyToCommentForm() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <button
        className="flex items-center space-x-1 hover:text-blue-700 mt-2"
        onClick={() => setShowForm(true)}
      >
        <MessageCircleReply />
        Reply
      </button>

      {/* {
        showForm && (
          <CommentForm />
        )
      } */}
    </div>
  );
}
