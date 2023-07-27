<script>
    import profile from "$lib/images/profile.jpg"
	import { projectsData } from "$lib/data/data";
	
</script>

<div class="container  mx-auto flex flex-col gap-4 p-4 justify-top items-center">
	{#each projectsData as proj, idx}
		<!-- Detailed -->
		<a class="card ng-initial flex {((idx%2)!=0) ? 'flex-col lg:flex-row ' : 'flex-col lg:flex-row-reverse' } card-hover overflow-hidden" href={proj.url}>
			<header>
				<img src={proj.img} class="bg-black/50 w-auto aspect-auto" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<h6 class="h6">{proj.info}</h6>
				<h3 class="h3" data-toc-ignore>{proj.title}</h3>
				<article>
					<p>{proj.info2}</p>
				</article>
			</div>
			<!-- <hr class="opacity-50" /> -->
			<!-- <footer class="p-4 flex justify-start items-center space-x-4">
				
				<div class="flex-auto flex justify-between items-center">
					<h6 class="font-bold">By Alex</h6>
					<small>On </small>
				</div>
			</footer> -->
		</a>
	{/each}
</div>
