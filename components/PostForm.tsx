'use client';

import { CircleHelp, Image } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mlsTeams, premierLeagueTeams } from '@/teams';
import TooltipCustom from './Tooltip';
import { useState } from 'react';

export default function PostForm({ userId }: { userId: string | null }) {
  const [title, setTitle] = useState('');
  return (
    <form className="flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <label>Title:</label>
        <input
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
          <div className="flex items-center space-x-2">
            <label>Community:</label>
            <Select>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>English Premier League</SelectLabel>
                  {premierLeagueTeams.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>MLS</SelectLabel>
                  {mlsTeams.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <TooltipCustom
              icon={<CircleHelp size={18} />}
              hoverText="Your post will go into the community of whichever team you select here. If a team is not selected, the post will go into the general community."
            />
          </div>

          <div className="flex items-center space-x-2">
            <label>Body:</label>
            <input
              placeholder="Enter a title to create a post"
              type="text"
              className="outline-none bg-slate-50 w-full rounded-full px-4 py-2"
            />
          </div>

          <div className="flex items-center space-x-2">
            <label>Image:</label>
            <input
              placeholder="Past the URL to an image to include in the post (optional)"
              type="text"
              className="outline-none bg-slate-50 w-full rounded-full px-4 py-2"
            />
          </div>
        </>
      )}
    </form>
  );
}
