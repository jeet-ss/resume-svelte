<script>
	import { drawerStore, AppRail, AppRailTile, AppRailAnchor } from "@skeletonlabs/skeleton";
    import { page } from "$app/stores";

    $: classesActive = (href)=> (href === $page.url.pathname ? '!bg-primary-500' : '');

    let currentPos = 0;
    function drawerClose() {
        drawerStore.close()
    }
</script>


<!-- <AppRail>
	<AppRailAnchor on:click={drawerClose} selected={$page.url.pathname === '/'} href='/' name="hm" value={0} title="hm">
		<svelte:fragment slot="lead">Home</svelte:fragment>
		
	</AppRailAnchor>
	<AppRailAnchor on:click={drawerClose} selected={$page.url.pathname === '/about'} href='/about' name="ab" value={1} title="ab">
		<svelte:fragment slot="lead">About</svelte:fragment>
		
	</AppRailAnchor>
	<AppRailAnchor on:click={drawerClose} selected={$page.url.pathname === '/contact'} href='/contact' name="cc" value={2} title="cc">
		<svelte:fragment slot="lead">Contact</svelte:fragment>
		
	</AppRailAnchor>
	
</AppRail> -->



<nav class="list-nav p-4 ">
    <ul>
        <li>
            <a href="/" on:click={drawerClose} class="{classesActive("/")}">
				<span class="badge ">💀</span>
				<span class="flex-auto">Home</span>
			</a>
        </li>
        <li><a href="/project" on:click={drawerClose} class="{classesActive("/project")}">My Projects</li>
        <li><a href="/experiences" on:click={drawerClose} class="{classesActive("/experiences")}">Work Experience</li>
        <li><a href="/toDo" on:click={drawerClose} class="{classesActive("/toDo")}">ToDo App</li>
        <li><a href="/about" on:click={drawerClose} class="{classesActive("/about")}">About</li>
        <li><a href="/contact" on:click={drawerClose} class="{classesActive("/contact")}">Contact</li>
    </ul>
</nav>