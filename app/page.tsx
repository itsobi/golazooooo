import CommunityWidget from '@/components/CommunityWidget';
import Feed from '@/components/Feed';
import LeftMenu from '@/components/LeftMenu';

export default function Home() {
  return (
    <div className="grid grid-cols-8 gap-2">
      <LeftMenu />

      <Feed />

      <CommunityWidget />
    </div>
  );
}
