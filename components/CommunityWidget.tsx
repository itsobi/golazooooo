import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

export default function CommunityWidget() {
  return (
    <section className="hidden md:inline-grid md:col-span-2 md:mr-4 border rounded">
      <div>
        <h4 className="font-bold text-center my-4">Top Communities</h4>
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
