<script>
	import { noteStore } from "$lib/stores";
	import { modalStore, toastStore, InputChip } from "@skeletonlabs/skeleton";
    import { goto } from "$app/navigation";
	import { list } from "postcss";
	//import { identity } from "svelte/types/runtime/internal/utils";
    let tags = [];
    let content = "";
    let name = "";
    function submitForm() {
        noteStore.update((notes) => [ ...notes,{
            id: crypto.randomUUID(),
            name,
            content,
            tags,
        }
    ]);
    name = "";
    content = "";
    tags = [];
    toastStore.trigger(t);
    // got to home page
    //goto('/')
    }
    const t = {
        message: 'Form submitted',
        background: 'variant-filled-primary'
    }
	function deleteNode(noteId="") {
		const confirmDelete = {
			type: 'confirm',
			title: 'delete node',
			body: 'Are you sure you want to delete this note?',
			response: (r=false) => {
				if (r){
					noteStore.update((notes) => notes.filter((n) => n.id !== noteId));
					toastStore.trigger({
						message: 'Note Deleted',
						background: 'variant-ghost-success'
					})
					return;
				}
				toastStore.trigger({
						message: 'Note Not Deleted',
						background: 'variant-ghost-error'
				})
			}
		}
		modalStore.trigger(confirmDelete)
	}

</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex flex-col gap-4 p-4 justify-center items-center">
    <!-- <div class="container flex flex-row p-4"> -->
        <form class="card p-4 mx-auto flex flex-col w-1/2 space-y-2">
            <h2>Add contact</h2>
            <input bind:value={name} class="input" type="text" placeholder="Full Name" />
            <textarea bind:value={content} class="textarea" rows="4" placeholder="Enter some content." />
            <InputChip bind:value={tags} name="chips" placeholder="Enter any value..." />
            <button on:click={submitForm} type="button" class="btn variant-ghost-primary self-end ">Submit</button>
        </form>  
    <!-- </div> -->
	
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each $noteStore as note} 
			<div class="card p-4 flex flex-col gap-2 relative" >
				<button on:click={() => deleteNode(note.id)} class="btn-icon btn-icon-sm variant-filled-error -top-1.5 -right-1 ">
					X
				</button>
				<header class="card-header">{note.name}</header>
				<section class="p-4 ">{note.content}</section>

				<!-- <div class="flex gap-1 flex-warp">
					{#each note.tags as tag}
						<span class="badge variant-filled-secondary">{tag}</span>
					{/each}
				</div> -->
				<!-- using flex is not good here as tags may get out of cards,
				so use grid here, div variant doesnt matter -->
				<footer class="card-footer grid grid-cols-2 gap-2">
					{#each note.tags as tag}
						<span class="badge variant-filled-secondary">{tag}</span>
					{/each}
				</footer>
			</div>
		{/each}

	</div>



</div>