<script>
	import { goto } from '$app/navigation';
    import Exp from '$lib/components/Exp.svelte';
	import { fade, fly } from 'svelte/transition';


    function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}
</script>
<div class="container mx-auto flex flex-col justify-center items-center p-4 overflow-x-scroll md:overflow-x-auto">
    <h1  class="text-2xl">About Me</h1>
    <div class="flex flex-col lg:flex-row gap-8 basis-5 shrink items-center">
        <img src='/profile.jpg' alt="face with shirt">
        <div class="flex flex-col  gap-4">
            <p>
                Hi, I am Jeet. I am an AI enthusiast and my Research interest includes Music/Audio Processing, <br>
                Robotics and their implemenation for solving real life problems.
            </p>
            <p>
                Pursuing innovation and building a team to 
                materialize new ideas is my prime objective in life
            </p>
        </div>
    </div>
    <div class="inline-flex flex-col md:flex-row gap-4">
        <button class="btn variant-ghost-primary">
            Resume
        </button>
        <button class="btn variant-ghost-secondary" on:click={() => {goto('/project')}}>
            My Projects
        </button>
        <button class="btn variant-ghost-tertiary" on:click={()=>{goto('#two')}} >
            Work
        </button>
    </div>
    <div in:fade={{  duration: 2000 }} out:fade={{  duration: 10 }} class="">
        <Exp />
    </div>
    <div id="anchor-10" in:fade={{  duration: 1000 }} class="">
        <Exp />
    </div>
    

</div>


<style>
	img {
	max-width: 40%;
	max-height: 40%;
	}
    :global(html){
        scroll-behavior: smooth;
    }
    
</style>