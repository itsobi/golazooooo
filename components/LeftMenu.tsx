import { CircleHelp } from 'lucide-react';
import TooltipCustom from './Tooltip';
import { createClient } from '@/supabase/server';
import LeftMenuSelect from './LeftMenuSelect';
import { Button } from './ui/button';

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
    <form className="hidden xl:inline-grid xl:col-span-2 p-6 space-y-6 border xl:ml-4 rounded max-h-72">
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
              {team.label}
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
              {team.label}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit">Visit</Button>
    </form>
  );
}
