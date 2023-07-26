<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import cover_img from '$lib/images/cover_img.jpg'
	import { goto } from '$app/navigation';
	import { typewriter } from '$lib/others/Typewriter';
	
	let src = "./images/cover_img.jpg"
	let visible = false;
	
	onMount(() =>{
		visible = true
	})

	function clickMore() {
		goto("/about")
	}
  </script>


<div class="container h-full w-full md:w-screen mx-auto flex flex-col gap-8 justify-top items-center" out:fly={{ y: -100  ,duration: 1000}}>
	
	<img src="/cover_bg.jpg" alt="two arms touching" class="w-full md:w-screen" />
	{#if visible}
    <h1>Hi, my name is <span in:typewriter={{ speed: 2 }} out class="text-2xl hover:font-sans hover:italic">JEET SEN SARMA</span></h1>
	{/if}
	<div>
		{#if visible}
			<p class="text-xl text-white-800" in:fade={{ duration: 2000}} out>
				AI Researcher, Developer
			</p>
		{/if}
	</div>
	<button class="btn variant-ghost-primary" on:click={clickMore}>
		Know More
	</button>
	
</div>

<style>
	img {
	max-width: 100%;
	max-height: 40%;
	}
</style>