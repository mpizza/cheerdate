export const prerender = true;
export const trailingSlash = 'always';

// src/routes/cheerleaders/+layout.ts
import type { PrerenderEntryGenerator } from './$types';
import { teamsData, type Member } from '$lib/data/teamsData';


export const _entries: PrerenderEntryGenerator = () => {
  const cheerleaders = teamsData.flatMap((team) => team.members);
  const paths = (cheerleaders as Member[]).map((c) => `/member/${c.memberId}`);
  console.log('Generated paths:', paths);
  return paths;
};