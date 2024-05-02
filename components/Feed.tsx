import { auth } from '@clerk/nextjs/server';
import PostForm from './PostForm';
import { createClient } from '@/supabase/server';

export default async function Feed() {
  const { userId } = auth();
  const supabase = createClient();

  const { data: allTeams } = await supabase.from('teams').select('*');

  return (
    <section className="col-span-full mx-4 md:mx-0 md:ml-4 md:col-span-6 xl:ml-0 xl:col-span-4 p-4">
      {userId && <PostForm userId={userId} allTeams={allTeams} />}
    </section>
  );
}
