import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

export default function CommunityWidget() {
  return (
    <section className="hidden lg:inline-grid lg:col-span-2 lg:mr-4 border rounded max-h-72 overflow-y-scroll sticky top-8">
      <div>
        <h4 className="font-bold text-center py-6">Top Communities</h4>
        <div className="flex justify-center xl:justify-normal items-center space-x-2 mb-2 px-6 border-b pb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <p>Label here</p>
            <p className="text-xs font-extralight">Created 2 days ago</p>
          </div>

          <Button size="sm" className="hidden xl:flex">
            View
          </Button>
        </div>

        <div className="flex justify-center xl:justify-normal items-center space-x-2 mb-2 px-6 border-b pb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <p>Label here</p>
            <p className="text-xs font-extralight">Created 2 days ago</p>
          </div>

          <Button size="sm" className="hidden xl:flex">
            View
          </Button>
        </div>
        <div className="flex justify-center xl:justify-normal items-center space-x-2 mb-2 px-6 pb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <p>Label here</p>
            <p className="text-xs font-extralight">Created 2 days ago</p>
          </div>

          <Button size="sm" className="hidden xl:flex">
            View
          </Button>
        </div>
      </div>
    </section>
  );
}
