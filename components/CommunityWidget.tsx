import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

export default function CommunityWidget() {
  return (
    <section className="hidden md:inline-grid md:col-span-2 md:mr-4 max-h-72 overflow-y-scroll">
      <div>
        <h4 className="font-semibold p-2">Top Communities</h4>
        <div className="flex justify-center xl:justify-normal items-center space-x-2 p-4 hover:bg-gray-100 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1 justify-center">
            <p>Label here</p>
            <p className="text-xs font-extralight">Created 2 days ago</p>
          </div>
        </div>
        <div className="flex justify-center xl:justify-normal items-center space-x-2 p-4 hover:bg-gray-100 cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1 justify-center">
            <p>Label here</p>
            <p className="text-xs font-extralight">Created 2 days ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}
