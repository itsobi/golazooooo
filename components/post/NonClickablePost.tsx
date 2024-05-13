import { Post } from './Post';

export default function NonClickablePost({ post }: { post: Post }) {
  const { title, body, created_at, image, username } = post;
  return (
    <div className="border-b space-y-4 p-4 bg-gray-100 my-4">
      <div className="flex items-center justify-between font-thin">
        <div className="flex items-center space-x-2">
          <p className="text-sm">{username}</p>
          <p className="text-xs text-gray-400">
            {new Date(created_at as string).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-xl mb-1">{title}</h4>
        </div>
        <p className="mb-4">{body}</p>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-fit mb-6"
          />
        )}
      </div>
    </div>
  );
}
