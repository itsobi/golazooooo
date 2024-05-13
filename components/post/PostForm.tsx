'use client';

import { CircleHelp, Image } from 'lucide-react';
import TooltipCustom from '../Tooltip';
import { useRef, useState } from 'react';
import { createPost } from '@/actions/posts/createPost';
import { useToast } from '../ui/use-toast';
import SendPost from './SendPost';

export default function PostForm({
  userId,
  username,
  allTeams,
}: {
  userId: string | undefined;
  username: string;
  allTeams: any[] | null;
}) {
  const [title, setTitle] = useState('');
  const [communityValue, setCommunityValue] = useState('');
  const [communityLabel, setCommunityLabel] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const imageRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const createPostWithNewValues = createPost.bind(
    null,
    communityValue,
    communityLabel,
    username,
    image
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setCommunityValue(selectedValue);

    const selectedTeam = allTeams?.find((team) => team.value === selectedValue);
    const selectedLabel = selectedTeam?.name;
    setCommunityLabel(selectedLabel); // Outputs the label of the selected option
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Non-image file type',
          description: 'Sorry, only images can be used in a post.',
          variant: 'destructive',
        });
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (readerEvent) => {
        const dataUrl = readerEvent.target?.result;
        setImage(dataUrl as string);
      };
    }
  };

  const resetForm = () => {
    setTitle('');
    setCommunityValue('');
    setBody('');
    setImage('');
  };

  return (
    <form
      action={async (formData) => {
        resetForm();
        const result = await createPostWithNewValues(formData);

        if (result?.message) {
          toast({
            description: result.message,
          });
        } else {
          toast({
            description: result.error,
            variant: 'destructive',
          });
        }
      }}
      className="flex-col space-y-4 border-b pb-4"
    >
      <div className="flex items-center space-x-2">
        <label>Title:</label>
        <input
          name="title"
          disabled={!userId}
          placeholder={userId ? 'Title of post' : 'Sign in to create a post'}
          type="text"
          className={`${
            userId ? 'cursor-default' : 'cursor-not-allowed'
          } outline-none bg-gray-100 w-full rounded-lg px-4 py-2`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {title && (
        <>
          <div className="flex items-center space-x-2">
            <label>Community:</label>
            <select
              name="community"
              value={communityValue}
              onChange={handleSelectChange}
              className="outline-none border rounded-lg bg-gray-100 p-2"
            >
              <option value="">Teams</option>
              {allTeams?.map((team) => (
                <option key={team.id} value={team.value}>
                  {team.name}
                </option>
              ))}
            </select>

            <TooltipCustom
              icon={<CircleHelp size={18} />}
              hoverText="Your post will go into the community of whichever team you select here. If a team is not selected, the post will go into the general feed shown below."
            />
          </div>

          <div className="flex items-center space-x-2">
            <label>Body:</label>
            <textarea
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Body of post"
              className="bg-gray-100 outline-none w-full px-4 py-2 h-14 rounded-lg"
            />
          </div>

          <div className="flex items-center space-x-2">
            <label>Image (optional):</label>
            {!image && (
              <span className="bg-gray-100 p-2 rounded-full transition-all duration-150 hover:bg-blue-700 hover:text-white cursor-pointer">
                <Image onClick={() => imageRef?.current?.click()} />
              </span>
            )}
            <input
              type="file"
              className="hidden"
              ref={imageRef}
              onChange={handleImagePreview}
            />

            {image && (
              <>
                <img
                  src={image}
                  alt="Image preview"
                  className="w-24 h-24 object-contain rounded"
                />
                <span
                  onClick={() => setImage('')}
                  className="text-red-600 hover:scale-105 transition duration-150 cursor-pointer"
                >
                  Remove image
                </span>
              </>
            )}
          </div>
        </>
      )}
      {title && body && <SendPost />}
    </form>
  );
}
