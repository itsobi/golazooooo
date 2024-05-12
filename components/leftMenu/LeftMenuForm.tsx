'use client';

import { useState } from 'react';
import TooltipCustom from '../Tooltip';
import { CircleHelp } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function LeftMenuForm({
  eplTeams,
  mlsTeams,
}: {
  eplTeams: any[] | null;
  mlsTeams: any[] | null;
}) {
  const [eplTeamSelected, setEplTeamSelected] = useState('');
  const [mlsTeamSelected, setMlsTeamSelected] = useState('');
  const router = useRouter();

  const handleEplTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEplTeamSelected(event.target.value);
    setMlsTeamSelected('');
  };

  const handleMlsTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMlsTeamSelected(event.target.value);
    setEplTeamSelected('');
  };

  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEplTeamSelected('');
    setMlsTeamSelected('');
  };

  const handleSubmit = () => {
    if (!eplTeamSelected && !mlsTeamSelected) return;

    router.push(`/community/${eplTeamSelected || mlsTeamSelected}`);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">English Premier League</h4>
          <TooltipCustom
            icon={<CircleHelp size={18} />}
            hoverText="Select a team in any league to view posts in their respective communities."
          />
        </div>
        <select
          value={eplTeamSelected}
          onChange={handleEplTeamChange}
          disabled={!!mlsTeamSelected}
          className={`${mlsTeamSelected && 'cursor-not-allowed'}
          }outline-none border rounded bg-slate-50 p-2 w-full`}
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
          value={mlsTeamSelected}
          onChange={handleMlsTeamChange}
          disabled={!!eplTeamSelected}
          className={`${eplTeamSelected && 'cursor-not-allowed'}
          }outline-none border rounded bg-slate-50 p-2 w-full`}
        >
          <option value="">Select a team</option>
          {mlsTeams?.map((team) => (
            <option key={team.id} value={team.value}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <button type="reset" onClick={resetForm} className="hover:underline">
          Reset
        </button>
      </div>
      <Button
        onClick={handleSubmit}
        type="button"
        disabled={!eplTeamSelected && !mlsTeamSelected}
        className="w-full"
      >
        Visit the community
      </Button>
    </div>
  );
}
