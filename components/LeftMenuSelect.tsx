'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';
import { useState } from 'react';

export default function LeftMenuSelect({ teams }: { teams: any[] | null }) {
  return (
    <form className="space-y-1">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select EPL team" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {teams?.map((team) => (
              <SelectItem key={team.id} value={team.id}>
                <div className="flex items-center space-x-2">
                  <img
                    src={team.image}
                    alt={team.label}
                    width={24}
                    height={24}
                  />
                  <p>{team.label}</p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex justify-end">
        <Button size="sm" variant="destructive">
          clear
        </Button>
      </div>
    </form>
  );
}
