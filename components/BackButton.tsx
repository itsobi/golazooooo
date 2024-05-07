'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowBigLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();
  return (
    <Button size="sm" onClick={() => router.back()}>
      <ArrowBigLeft />
      Go back
    </Button>
  );
}
