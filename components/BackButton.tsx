'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();
  return (
    <div
      className="bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200"
      onClick={() => router.back()}
    >
      <ArrowLeft />
    </div>
  );
}
