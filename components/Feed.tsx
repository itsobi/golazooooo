import { currentUser } from '@clerk/nextjs/server';
import PostForm from './PostForm';
import { createClient } from '@/supabase/server';
import Post from './Post';

export default async function Feed() {
  const user = await currentUser();
  const username = `@${
    user?.primaryEmailAddress?.emailAddress.split('@')[0]
  }-${user?.id.slice(-4)}`;
  const supabase = createClient();

  const { data: allTeams } = await supabase
    .from('teams')
    .select('*')
    .order('name', { ascending: true });
  const { data: posts } = await supabase.from('posts').select('*');

  return (
    <section className="px-4 col-span-8 md:col-span-6 xl:col-span-4 max-h-screen overflow-y-scroll border-x">
      {user?.id && (
        <PostForm userId={user.id} username={username} allTeams={allTeams} />
      )}

      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
