import { auth } from '@clerk/nextjs/server';
import PostForm from './PostForm';

export default function Feed() {
  const { userId } = auth();
  return (
    <section className="col-span-full mx-4 md:mx-0 md:ml-4 md:col-span-6 xl:ml-0 xl:col-span-4 p-4 border xl:border-b-0 rounded">
      <PostForm userId={userId} />
    </section>
  );
}
