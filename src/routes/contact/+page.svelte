<script>

    import TelInput from "$lib/components/TelInput.svelte";
    import NetTelInput from "$lib/components/NetTelInput.svelte";
    let name = "";
    let message = "";
   
    
</script>


<div class="container h-full mx-auto flex flex-col gap-4 justify-center items-center">
    <h1>Get in Touch with Me</h1>
    <div class="card p-2 variant-filled-surface flex flex-col gap-2">
        <label class="label">
            <input bind:value={name} class="input dark:text-white" type="text" placeholder="Full Name" />
        </label>
        
        <!-- Phone number group -->
        <TelInput />
        <label class="label">
            <textarea bind:value={message} class="textarea dark:text-white" rows="2" placeholder="What's on your mind?" />
        </label>
        

    </div>

</div>
