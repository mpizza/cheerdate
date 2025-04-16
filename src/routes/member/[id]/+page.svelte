<script lang="ts">
  import type { Member, Links } from '$lib/data/teamsData'; // Adjust path if needed
  import OgGirlImage from '$lib/components/og-girl-image.svelte';
  export let data: { member: Member, teamId: string, teamName: string };

  const { member, teamId, teamName } = data;

  // --- Prepare Data for Display ---

  // Social Links Processing (keep existing logic)
  const socialLinks = Object.entries(member.links || {})
    .map(([key, value]) => {
      if (!value) return null;
      let url = value;
      let label = key.toUpperCase();
      let displayValue = value;
      switch (key) {
        case 'ig': url = `https://www.instagram.com/${value}/`; label = 'Instagram'; displayValue = `@${value}`; break;
        case 'facebook': if (!value.startsWith('http')) { url = `https://www.facebook.com/${value}`; } label = 'Facebook'; break;
        case 'x': url = `https://x.com/${value}`; label = 'X (Twitter)'; displayValue = `@${value}`; break;
        case 'thread': url = `https://www.threads.net/@${value}`; label = 'Threads'; displayValue = `@${value}`; break;
        case 'official': label = 'Official Link'; break;
      }
      return { key, url, label, displayValue };
    })
    .filter(link => link !== null);

  // --- SEO Data (keep existing logic) ---
  const pageTitle = `${member.name} (${member.englishName || member.fullName || ''}) | ${teamName}`.replace(' () |', ' |');
  const pageDescription = `${member.name}, 班表資訊.`;

  // --- Date Processing Helper ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Function to process each schedule item (MODIFIED to return scheduleDate)
  function processScheduleItem(item: string) {
    const dateMatch = item.match(/^(\d{4}[/-]\d{1,2}[/-]\d{1,2})/);
    let scheduleDate: Date | null = null; // Initialize scheduleDate
    let dayOfWeek: string | null = null;
    let isPast = false;

    if (dateMatch && dateMatch[1]) {
      const dateString = dateMatch[1].replace(/-/g, '/');
      const parsedDate = new Date(dateString); // Use a temporary variable

      if (!isNaN(parsedDate.getTime())) {
        scheduleDate = parsedDate; // Assign if valid
        dayOfWeek = scheduleDate.toLocaleDateString('zh-TW', { weekday: 'short' });

        const scheduleDateAtMidnight = new Date(scheduleDate);
        scheduleDateAtMidnight.setHours(0, 0, 0, 0);
        isPast = scheduleDateAtMidnight < today;
      }
      // If parsing failed, scheduleDate remains null
    }

    return {
      originalText: item,
      scheduleDate, // <-- Return the Date object (or null)
      dayOfWeek,
      isPast,
    };
  }

  // Process AND SORT the member's schedule
  const processedSchedule = (member.schedule?.map(processScheduleItem) || [])
    .sort((a, b) => {
      // Handle cases where one or both dates are null
      // Treat items without a valid date as "oldest" (put them at the end for descending sort)
      if (!a.scheduleDate && !b.scheduleDate) return 0; // Keep original relative order if both null
      if (!a.scheduleDate) return 1;  // a has no date, so b comes first (desc)
      if (!b.scheduleDate) return -1; // b has no date, so a comes first (desc)

      // Both dates are valid, sort descending (newest first)
      return a.scheduleDate.getTime() - b.scheduleDate.getTime();
    });

</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta
    name="description"
    content={pageDescription}
  />
  <meta
  name="keywords"
  content="啦啦隊,啦啦隊班表,台灣啦啦隊,{member.name},中職真香,中職啦啦隊,中華職棒,啦啦隊,Passion Sisters,Rakuten Girls,Fubon Angels,UNI GIRLS,Dragon Beauties,WING STARS"
  />
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <OgGirlImage teamID={teamId}/>
  <meta property="og:type" content="profile" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
</svelte:head>

<article class="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">

  <!-- Header -->
  <header class="mb-6 border-b pb-4 border-gray-200">
    <h1 class="text-3xl font-bold text-gray-800 mb-1">
      {member.name} | {teamName}
    </h1>
  </header>

  <!-- Social Links -->
  {#if socialLinks.length > 0}
    <section class="mb-6">
      <div class="flex flex-wrap gap-4">
        {#each socialLinks as link (link.key)}
          {#if link}
           <a href={link.url} target="_blank" rel="noopener noreferrer" class="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out text-sm">
             {link.label}: {link.displayValue}
           </a>
          {/if}
        {/each}
      </div>
    </section>
  {/if}

  <!-- Schedule -->
  <section>
    <h2 class="text-xl font-semibold text-gray-700 m-3">班表</h2>
    {#if processedSchedule && processedSchedule.length > 0}
      <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {#each processedSchedule as item (item.originalText)}
          {#if !item.isPast}
            <div
              class="bg-gray-50 p-3 rounded border border-gray-200 text-sm break-words transition-opacity duration-300"
              class:opacity-30={item.isPast}
              class:text-gray-600={item.isPast}
            >
              {item.originalText}
              {#if item.dayOfWeek}
                <span class="ml-2 text-xs font-medium text-indigo-500">({item.dayOfWeek})</span>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
      <hr class="m-3"/>
      <h2 class="text-xl font-semibold text-gray-900 m-3">過去的班表</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        {#each processedSchedule as item (item.originalText)}
          {#if item.isPast}
            <div
              class="bg-gray-50 p-3 rounded border border-gray-200 text-sm break-words transition-opacity duration-300"
              class:opacity-30={item.isPast}
              class:text-gray-600={item.isPast}
            >
              {item.originalText}
              {#if item.dayOfWeek}
                <span class="ml-2 text-xs font-medium text-indigo-500">({item.dayOfWeek})</span>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    {:else}
      <p class="text-gray-500 italic">No schedule available for this member.</p>
    {/if}
  </section>

</article>
