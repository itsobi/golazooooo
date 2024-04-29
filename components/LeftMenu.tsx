import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CircleHelp } from 'lucide-react';
import { mlsTeams, premierLeagueTeams } from '@/teams';
import TooltipCustom from './Tooltip';

export default function LeftMenu() {
  return (
    <section className="hidden xl:inline-grid xl:col-span-2 p-6 space-y-6 border rounded">
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
            <SelectValue placeholder="Select an EPL team" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {premierLeagueTeams.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.team}
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
              {mlsTeams.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.team}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
