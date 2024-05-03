'use client';

import { CircleHelp } from 'lucide-react';
import TooltipCustom from './Tooltip';
import { useState } from 'react';
import { createPost } from '@/app/actions/posts/actions';
import { Button } from './ui/button';

export default function PostForm({
  userId,
  username,
  allTeams,
}: {
  userId: string | null;
  username: string;
  allTeams: any[] | null;
}) {
  const [title, setTitle] = useState('');
  const [communityValue, setCommunityValue] = useState('');
  const [communityLabel, setCommunityLabel] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const updatePostWithCommunityValue = createPost.bind(
    null,
    communityValue,
    communityLabel,
    username
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setCommunityValue(selectedValue);

    const selectedTeam = allTeams?.find((team) => team.value === selectedValue);
    const selectedLabel = selectedTeam?.label;
    setCommunityLabel(selectedLabel); // Outputs the label of the selected option
  };

  const resetForm = () => {
    setTitle('');
    setCommunityValue('');
    setBody('');
    setImage('');
  };

  return (
    <form
      action={(formData) => {
        resetForm();
        updatePostWithCommunityValue(formData);
      }}
      className="flex-col space-y-4 border-b pb-4"
    >
      <div className="flex items-center space-x-2">
        <label>Title:</label>
        <input
          name="title"
          disabled={!userId}
          placeholder={
            userId
              ? 'Enter a title to create a post'
              : 'Sign in to create a post'
          }
          type="text"
          className={`${
            userId ? 'cursor-default' : 'cursor-not-allowed'
          } outline-none bg-slate-50 w-full rounded-full px-4 py-2`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {title && (
        <>
          {/* TODO: get value of community chosen */}
          <div className="flex items-center space-x-2">
            <label>Community:</label>
            <select
              name="community"
              value={communityValue}
              onChange={handleSelectChange}
              className="outline-none border rounded bg-slate-50 p-2"
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
              hoverText="Your post will go into the community of whichever team you select here. If a team is not selected, the post will go into the general community."
            />
          </div>

          <div className="flex items-center space-x-2">
            <label>Image:</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              name="image"
              placeholder="Past the URL to an image to include in the post (optional)"
              type="text"
              className="outline-none bg-slate-50 w-full rounded-full px-4 py-2"
            />
          </div>

          <div className="flex items-center space-x-2">
            <label>Body:</label>
            <textarea
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter a title to create a post"
              className={`bg-slate-50 outline-none w-full px-4 py-2 h-14`}
            />
          </div>
        </>
      )}
      {title && body && (
        <Button type="submit" className="w-full rounded-full">
          Create post
        </Button>
      )}
    </form>
  );
}
