'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={`w-full rounded-full`}>
      {pending ? 'Creating post...' : 'Create Post'}
    </Button>
  );
}
