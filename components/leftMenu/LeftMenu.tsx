import { CircleHelp } from 'lucide-react';
import TooltipCustom from '../Tooltip';
import { createClient } from '@/supabase/server';
import LeftMenuSelect from './LeftMenuSelect';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';

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
    <>
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">English Premier League</h4>
          <TooltipCustom
            icon={<CircleHelp size={18} />}
            hoverText="Select a team in any league to view posts in their respective communities."
          />
        </div>
        <select
          name="eplTeam"
          className="outline-none border rounded bg-slate-50 p-2 w-full"
        >
          <option value="">Select a team</option>
          {eplTeams?.map((team) => (
            <option key={team.id} value={team.value}>
              {team.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <h4 className="font-bold">Major League Soccer</h4>
        <select
          name="mlsTeam"
          className="outline-none border rounded bg-slate-50 p-2 w-full"
        >
          <option value="">Select a team</option>
          {mlsTeams?.map((team) => (
            <option key={team.id} value={team.value}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <Button type="submit">Visit</Button>
    </>
  );
}