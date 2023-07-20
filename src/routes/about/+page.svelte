<script>
	import { goto } from '$app/navigation';
    import Exp from '$lib/components/Exp.svelte';
</script>
<html lang="en">
<div class="container h-full mx-auto flex flex-col justify-center items-center p-4">
    <h1  class="text-2xl">About Me</h1>
    <div class="flex flex-row gap-8 basis-5 shrink items-center">
        <img src='/favicon.png' alt="face with shirt">
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
    <div class="flex flex-row gap-4">
        <button class="btn variant-ghost-primary">
            Resume
        </button>
        <button class="btn variant-ghost-secondary" on:click={() => {goto('/project')}}>
            My Projects
        </button>
        <button class="btn variant-ghost-tertiary" >
            Work Experiences
        </button>
    </div>
    <Exp />

</div>
</html>
<style>
	img {
	max-width: 40%;
	max-height: 40%;
	}
    html {
  scroll-behavior: smooth;
}
</style>