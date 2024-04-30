import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CircleHelp } from 'lucide-react';
import TooltipCustom from './Tooltip';
import { createClient } from '@/supabase/server';
import Image from 'next/image';

export default async function LeftMenu() {
  const supabase = createClient();

  const { data: eplTeams } = await supabase
    .from('teams')
    .select('*')
    .eq('league', 'Premier League');
  const { data: mlsTeams } = await supabase
    .from('teams')
    .select('*')
    .eq('league', 'MLS');

  return (
    <section className="hidden xl:inline-grid xl:col-span-2 p-6 space-y-6 border xl:ml-4 rounded h-52">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">English Premier League</h4>
          <TooltipCustom
            icon={<CircleHelp size={18} />}
            hoverText="Select a team in any league to view posts in their respective communities."
          />
        </div>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select EPL team" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {eplTeams?.map((team) => (
                <SelectItem key={team.value} value={team.value}>
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
      </div>

      <div className="space-y-1">
        <h4 className="font-bold">Major League Soccer</h4>
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select MLS team" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {mlsTeams?.map((team) => (
                <SelectItem key={team.value} value={team.value}>
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
      </div>
    </section>
  );
}
