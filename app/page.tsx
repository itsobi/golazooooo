import CommunityWidget from '@/components/communityWidget/CommunityWidget';
import Feed from '@/components/Feed';
import LeftMenu from '@/components/leftMenu/LeftMenu';

export default function Home() {
  return (
    <div className="grid grid-cols-8 gap-4 overflow-y-hidden">
      <form className="hidden xl:inline-grid xl:col-span-2 p-6 xl:ml-4 rounded h-fit scroll-m-0 space-y-4">
        <LeftMenu />
      </form>

      <section className="px-4 col-span-8 md:col-span-6 xl:col-span-4 max-h-screen overflow-y-scroll border-x">
        <Feed />
      </section>

      <section className="hidden md:inline-grid md:col-span-2 md:mr-4 max-h-72 overflow-y-scroll">
        <CommunityWidget />
      </section>
    </div>
  );
}
