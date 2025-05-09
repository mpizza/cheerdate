<script lang="ts">
	import { onMount } from 'svelte';
	// Import Chevron icons
	import { Icon, Link, ChevronLeft, ChevronRight } from 'svelte-hero-icons';
	import IconItem from '$lib/components/icon.svelte';
	import SliderTip from '$lib/components/slider-tip.svelte';
	import Notice from '$lib/components/notice.svelte';
	import OgGirlImage from '$lib/components/og-girl-image.svelte';
	import Header from '$lib/components/header.svelte';
	import RefBox from '$lib/components/reference.svelte';

	import { teamsData, type Member } from '$lib/data/teamsData';
	import { Clipboard } from 'svelte-hero-icons';

	import { pushState } from '$app/navigation';
	import { base } from '$app/paths';
	interface DateInfo {
		ymd: string;
		display: string;
	}
	const dayrange = 14;
	let activeTeamId: string | null = null;
	let dateRange: string[] = [];
	let dateDisplayRange: DateInfo[] = [];
	let searchTerm: string = '';
	let filteredMembers: Member[] = [];
	let startDate: Date = new Date();
	let keyupDebounce: number | undefined;
	let showNotice: boolean = false; // State to control the visibility of the notice
	let noticeMessage: string = ''; // Message to display in the notice
	let scheduleTableContainerElement: HTMLDivElement; // Reference to the schedule table container div
	const scrollAmount = 200; // Pixels to scroll horizontally (can adjust this)

	$: activeTeamScheduleSourceLink =
		teamsData.find((team) => team.teamId === activeTeamId)?.scheduleSourceLink || [];

	$: activeTeamHeader =
		teamsData.find((team) => team.teamId === activeTeamId)?.teamName || 'CPBL 啦啦隊女孩';

	function formatDateToYMD(date: Date): string {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	}

	function formatYMDtoDisplay(ymdString: string): string {
		try {
			const date = new Date(ymdString + 'T00:00:00');
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const weekday = date.toLocaleDateString('zh-TW', { weekday: 'short' });
			return `${month}/${day} ${weekday}`;
		} catch (e) {
			console.error('Error formatting display date:', ymdString, e);
			return ymdString;
		}
	}

	function calculateDateRange(start: Date) {
		const tempDateRange: string[] = [];
		const tempDisplayRange: DateInfo[] = [];
		for (let i = 0; i < dayrange; i++) {
			const currentDate = new Date(start);
			currentDate.setDate(start.getDate() + i);
			const ymd = formatDateToYMD(currentDate);
			tempDateRange.push(ymd);
			tempDisplayRange.push({ ymd: ymd, display: formatYMDtoDisplay(ymd) });
		}
		dateRange = tempDateRange;
		dateDisplayRange = tempDisplayRange;
	}

	onMount(() => {
		// Get initial values from URL parameters
		const urlParams = new URLSearchParams(window.location.search);
		const initialTeamId = urlParams.get('team');
		const initialSearchTerm = urlParams.get('search');

		if (initialTeamId && teamsData.find((team) => team.teamId === initialTeamId)) {
			activeTeamId = initialTeamId;
		} else if (teamsData.length > 0) {
			activeTeamId = teamsData[0].teamId;
		}
		if (initialSearchTerm) {
			searchTerm = initialSearchTerm;
		} else {
			searchTerm = '';
		}
		calculateDateRange(startDate);
	});

	$: selectedTeamMembers =
		teamsData.find((team) => team.teamId === activeTeamId)?.members || [];

	$: filteredMembers = selectedTeamMembers.filter((member) => {
		const searchTerms = searchTerm.split('&');
		if (searchTerms.length === 1) {
			return member.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
		} else {
			return searchTerms.some((keyword) =>
				member.name.toLowerCase().includes(keyword.toLowerCase().trim())
			);
		}
	});

	$: calculateDateRange(startDate);

	function changeDateRange(days: number) {
		startDate.setDate(startDate.getDate() + days);
		startDate = new Date(startDate);
	}

	async function copyCurrentUrl() {
		try {
			await navigator.clipboard.writeText(window.location.href);
			noticeMessage = '已複製當前網址到剪貼簿！';
			showNotice = true;
			setTimeout(() => {
				showNotice = false;
			}, 1000);
		} catch (err) {
			console.error('複製網址失敗:', err);
			noticeMessage = '複製網址失敗，請手動複製。';
			showNotice = true;
			setTimeout(() => {
				showNotice = false;
			}, 1000);
		}
	}

	// Function to update the URL
	function updateUrl() {
		const updatePatams = getCurrentParams();
		const newUrl = `${window.location.pathname}?${updatePatams}`;
		pushState(newUrl, { team: activeTeamId, search: searchTerm });
	}

	function getCurrentParams() {
		const urlParams = new URLSearchParams();
		if (activeTeamId) {
			urlParams.set('team', activeTeamId);
		}
		if (searchTerm) {
			urlParams.set('search', searchTerm);
		}
		return urlParams.toString();
	}

	function getDayOfWeek(ymdString: string): number {
		const date = new Date(ymdString + 'T00:00:00');
		return date.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
	}

	// Function to scroll the schedule table container
	function scrollScheduleTable(direction: 'left' | 'right') {
		if (!scheduleTableContainerElement) return;
		const currentScroll = scheduleTableContainerElement.scrollLeft;
		const amount = direction === 'left' ? -scrollAmount : scrollAmount;
		scheduleTableContainerElement.scrollTo({
			left: currentScroll + amount,
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>中職啦啦隊女孩應援日曆查詢系統</title>
	<meta
		name="description"
		content="中職啦啦隊女孩應援日曆查詢系統、包含中信兄弟、樂天桃猿、味全龍、7-11統一獅、台鋼雄鷹、富邦悍將。"
	/>
	<meta
		name="keywords"
		content="啦啦隊,啦啦隊班表,台灣啦啦隊,峮峮,林襄,邊荷律,李珠珢,一粒,李多慧,安芝儇,李雅英,中職真香,中職啦啦隊,中華職棒,啦啦隊,Passion Sisters,Rakuten Girls,Fubon Angels,UNI GIRLS,Dragon Beauties,WING STARS"
	/>
	<meta property="og:title" content="中職啦啦隊女孩應援日曆查詢系統" />
	<meta
		property="og:description"
		content="中職啦啦隊女孩應援日曆查詢系統、包含中信兄弟、樂天桃猿、味全龍、7-11統一獅、台鋼雄鷹、富邦悍將。"
	/>
	<meta property="og:url" content="https://mpizza.github.io/cheerdate/" />
	{#if activeTeamId}
		<OgGirlImage teamID={activeTeamId} />
	{:else}
		<OgGirlImage teamID="T1" />
	{/if}
</svelte:head>

<div class="max-w-full mx-auto my-8 p-4 font-sans">
	<Notice message={noticeMessage} show={showNotice} />
	<Header teamHeader={activeTeamHeader} />

	<!-- Team Selection & Share Button Row -->
	<div class="flex justify-between items-start mb-4">
		<div class="flex-grow mr-4">
			<div class="flex flex-wrap space-x-2 border-b border-gray-300 pb-2" id="teamsBox">
				{#each teamsData as team (team.teamId)}
					<button
						on:click={() => {
							activeTeamId = team.teamId;
							searchTerm = '';
							clearTimeout(keyupDebounce);
							setTimeout(() => {
								updateUrl();
								// --- Add Google Analytics Event Tracking ---
								if (typeof window.gtag === 'function' && activeTeamId) {
									// Check if gtag exists and search term is not empty
									window.gtag('event', 'teamId', {
										click_team_id: activeTeamId
									});
								}
								// --- End GA Tracking ---
							}, 200);
						}}
						class="teamBT py-2 px-4 text-sm font-medium whitespace-nowrap rounded-t-md focus:outline-none transition-colors duration-150 ease-in-out mb-2"
						class:bg-blue-600={activeTeamId === team.teamId}
						class:text-white={activeTeamId === team.teamId}
						class:text-blue-600={activeTeamId !== team.teamId}
						class:hover:bg-blue-100={activeTeamId !== team.teamId}
						class:hover:text-blue-700={activeTeamId !== team.teamId}
						data-team-id={team.teamId}
					>
						{team.teamName}
					</button>
				{/each}
				<!-- Removed the flex-grow div that was inside here -->
			</div>
		</div>
		<button
			on:click={copyCurrentUrl}
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-shrink-0 mt-1"
		>
			<Icon src={Clipboard} class="w-4 h-4 inline-block mr-1" />分享
		</button>
	</div>

	<!-- Date Range Controls -->
	<div class="flex justify-center items-center mb-4">
		<button
			on:click={() => changeDateRange(-7)}
			class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
		>
			&lt; 上週
		</button>
		<span class="mx-4 text-center whitespace-nowrap">
			{dateDisplayRange.length > 0 ? dateDisplayRange[0].display.split(' ')[0] : ''} ~
			{dateDisplayRange.length > 0
				? dateDisplayRange[dateDisplayRange.length - 1].display.split(' ')[0]
				: ''}
		</span>
		<button
			on:click={() => changeDateRange(7)}
			class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
		>
			下週 &gt;
		</button>
	</div>

	<!-- Search Input -->
	{#if activeTeamId}
		<div class="mb-4">
			<input
				type="text"
				bind:value={searchTerm}
				on:keyup={() => {
					clearTimeout(keyupDebounce);
					keyupDebounce = setTimeout(() => {
						const trimmedSearch = searchTerm.trim();
						// --- Add Google Analytics Event Tracking ---
						if (typeof window.gtag === 'function' && trimmedSearch) {
							// Check if gtag exists and search term is not empty
							window.gtag('event', 'search', {
								search_term: trimmedSearch // Send the trimmed search term
							});
						}
						// --- End GA Tracking ---
						updateUrl();
					}, 500);
				}}
				placeholder="搜尋成員姓名... eg, 貴貴 也可以 貴貴&峮峮"
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	{/if}

	<SliderTip></SliderTip>

	{#if activeTeamId && dateDisplayRange.length > 0}
		<!-- Scroll Buttons Container - Hidden on small screens, visible on md and up -->
		<div class="hidden md:flex justify-end mb-2 space-x-2">
			<button
				on:click={() => scrollScheduleTable('left')}
				class="p-2 rounded-full hover:bg-gray-200 outline-none ring-2 ring-blue-500 flex-shrink-0"
				aria-label="Scroll schedule left"
			>
				<Icon src={ChevronLeft} class="w-5 h-5 text-gray-600" />
			</button>
			<button
				on:click={() => scrollScheduleTable('right')}
				class="p-2 rounded-full hover:bg-gray-200 outline-none ring-2 ring-blue-500 flex-shrink-0"
				aria-label="Scroll schedule right"
			>
				<Icon src={ChevronRight} class="w-5 h-5 text-gray-600" />
			</button>
		</div>

		<!-- Schedule Table Container -->
		<div
			class="overflow-x-auto border border-gray-200 rounded-md shadow-sm scrollbar-hide"
			bind:this={scheduleTableContainerElement}
		>
			<table class="min-w-full divide-y divide-gray-200 text-sm">
				<thead class="bg-gray-100 sticky top-0 z-10">
					<tr>
						<th
							scope="col"
							class="sticky left-0 bg-gray-100 z-20 py-3 px-4 text-left font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap"
						>
							成員
						</th>
						{#each dateDisplayRange as dateInfo (dateInfo.ymd)}
							<th
								scope="col"
								class="py-3 px-3 text-center font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap"
							>
								{dateInfo.display}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					{#if filteredMembers.length > 0}
						{#each filteredMembers as member (member.memberId)}
							<tr class="hover:bg-gray-50 transition-colors duration-100">
								<td
									class="sticky left-0 bg-white hover:bg-gray-50 z-10 py-2 px-4 font-medium text-gray-900 whitespace-nowrap border-r border-gray-200"
								>
									<div class="flex flex-col">
										<span>
											<a href="{base}/member/{member.memberId}" class="flex items-center">
												{member.name}
											</a>
										</span>
										<div class="flex space-x-2 mt-1">
											{#if member.links.facebook}
												<a
													href={member.links.facebook}
													target="_blank"
													rel="noopener noreferrer"
												>
													<IconItem
														iconType="fb"
														size={16}
														className="w-4 h-4 text-gray-800 hover:text-gray-900"
													/>
												</a>
											{/if}
											{#if member.links.ig}
												<a
													href="https://www.instagram.com/{member.links.ig}"
													target="_blank"
													rel="noopener noreferrer"
												>
													<IconItem
														iconType="ig"
														size={16}
														className="w-4 h-4 text-gray-800 hover:text-gray-900"
													/>
												</a>
											{/if}
											{#if member.links.ig}
												<a
													href="https://www.threads.net/@{member.links.ig}"
													target="_blank"
													rel="noopener noreferrer"
												>
													<IconItem
														iconType="thread"
														size={16}
														className="w-4 h-4 text-gray-800 hover:text-gray-900"
													/>
												</a>
											{/if}
											{#if member.links.x}
												<a href={member.links.x} target="_blank" rel="noopener noreferrer">
													<IconItem
														iconType="x"
														size={16}
														className="w-4 h-4 text-gray-800 hover:text-gray-900"
													/>
												</a>
											{/if}
										</div>
									</div>
								</td>
								{#each dateRange as dateStr (dateStr)}
									<td
										class="py-2 px-3 text-center"
										class:bg-green-100={getDayOfWeek(dateStr) === 6}
										class:bg-pink-100={getDayOfWeek(dateStr) === 0}
									>
										{#if member.schedule && member.schedule.includes(dateStr)}
											<span
												class="text-green-600 font-bold text-lg"
												title="{member.name} 出場於 {dateStr}"
											>
												✓
											</span>
										{:else}
											<span class="text-gray-300">-</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					{:else}
						<tr>
							<td
								colspan={dateRange.length + 1}
								class="text-center py-4 px-4 text-gray-500 italic"
							>
								{#if searchTerm}
									找不到符合 "{searchTerm}" 的成員。
								{:else}
									{teamsData.find((t) => t.teamId === activeTeamId)?.teamName ||
										'該隊伍'} 沒有成員資料。
								{/if}
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
		{#if activeTeamScheduleSourceLink.length > 0}
			<RefBox {activeTeamScheduleSourceLink} />
		{/if}
	{:else if !activeTeamId}
		<p class="text-center text-gray-500 py-8">請選擇一個隊伍。</p>
	{:else}
		<p class="text-center text-gray-500 py-8">正在載入日期...</p>
	{/if}
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
