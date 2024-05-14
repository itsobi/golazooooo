'use client';

import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

export default function DeleteButton() {
  return (
    <Button variant="destructive" size="icon">
      <Trash2 />
    </Button>
  );
}
