<script lang="ts">
  import { type ReferenceInfo } from '$lib/data/teamsData';
  import { Icon, Link } from 'svelte-hero-icons';
  export let activeTeamScheduleSourceLink: ReferenceInfo[];
</script>
<div class="mt-4 text-center">
  {#each activeTeamScheduleSourceLink as sourceLink (sourceLink)}
    <a
      href={sourceLink?.url}
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500 hover:underline flex justify-center items-center"
    >
      <Icon src={Link} class="w-4 h-4 mr-1" />
      {sourceLink.title}
    </a>
  {/each}
</div>