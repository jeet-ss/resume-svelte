<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Avatar, Drawer, drawerStore, Toast, Modal, LightSwitch  } from '@skeletonlabs/skeleton';
	import {page} from '$app/stores'
	import Navigation from '$lib/components/Navigation.svelte';
	import FooterPage from '$lib/components/Footer_Page.svelte';
	import { goto } from '$app/navigation';

	$: classesSidebar = $page.url.pathname === '/' ? 'w-28' : 'w-40';
	
	const drawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgDrawer: 'bg-surface-700 text-white',
	//bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'w-[180px] md:w-[280px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};
	function drawerOpen() {
		drawerStore.open(drawerSettings);
	}
	function scrollHandler(event) {
		console.log(event.currentTarget.scrollTop);
	}
	
</script>

<Modal />
<Toast position="b"/>

<!-- App Shell -->
<Drawer class="bg-surface-500" >
	<h2 class="p-4"> Navigation</h2>
	<hr />
	<Navigation />
</Drawer>


<AppShell slotSidebarLeft="bg-surface-500/5 scroll-behavior:smooth {classesSidebar}"  on:scroll={scrollHandler}>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="btn btn-sm mr-4" on:click={drawerOpen}>
					<svg viewBox="0 0 100 80" class="fill-token w-4 h-4" >
						<rect width="100" height="20" />
						<rect y="30" width="100" height="20" />
						<rect y="60"width="100" height="20" />
					</svg>
				</button>
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
				<LightSwitch />
				<Avatar initials="Js" width="w-10" background="bg-primary-700/70" 
				border="border-4 border-surface-300-600-token hover:!border-primary-500"
				cursor="cursor-pointer" on:click={() =>{goto('/')}}/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<svelte:fragment slot="sidebarRight"></svelte:fragment>
	<svelte:fragment slot="pageHeader"></svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter"></svelte:fragment> -->
	<svelte:fragment slot="footer">
		<FooterPage />
	</svelte:fragment>
</AppShell>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
  </style>