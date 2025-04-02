<script lang="ts">
	import Header from './Header.svelte';
	import { Icon, Link} from 'svelte-hero-icons';
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<a 
		target="_blank"
			rel="noopener noreferrer"
			class="text-blue-500 hover:underline"
		href="https://github.com/mpizza/cheerdate/issues">
		班表透過圖片辨識+手工加上的，請以各球隊的資料為主。有任可建議請留言
		</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
