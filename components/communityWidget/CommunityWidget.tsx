import { createClient } from '@/supabase/server';
import CommunityWidgetRow from './CommunityWidgetRow';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export type CommunityWidgetRowProps = {
  name: string;
  image: string;
  value: string;
};

export default async function CommunityWidget() {
  // query post from supabase where
  const supabase = createClient();
  const { data: communities, error } = await supabase
    .from('communities_with_posts')
    .select('*');

  return (
    <div className="bg-gray-100 p-4">
      <h4 className="font-semibold mb-4">Top Communities</h4>
      {communities?.map((community) => (
        <CommunityWidgetRow community={community} />
      ))}
    </div>
  );
}
