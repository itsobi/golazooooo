import { createClient } from '@/supabase/server';
import LeftMenuForm from './LeftMenuForm';

export default async function LeftMenu() {
  const supabase = createClient();

  const { data: eplTeams } = await supabase
    .from('teams')
    .select('*')
    .eq('league', 'Premier League')
    .order('name', { ascending: true });
  const { data: mlsTeams } = await supabase
    .from('teams')
    .select('*')
    .eq('league', 'MLS')
    .order('name', { ascending: true });

  return <LeftMenuForm eplTeams={eplTeams} mlsTeams={mlsTeams} />;
}
