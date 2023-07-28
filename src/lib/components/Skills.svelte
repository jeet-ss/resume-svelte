<script lang="ts">
    import { ProgressRadial } from "@skeletonlabs/skeleton";
	import FooterPage from "./Footer_Page.svelte";

    let pythonVal: number = 50;
    
    let demoArr: {name: string, value: number}[] = [ 
        {
            name:"Python",
            value: 90,
        },
        {
            name:"Java",
            value: 70,
        },
        {
            name:"React",
            value: 10,
        },
        {
            name:"Javascript",
            value: 30,
        },
        {
            name:"C",
            value: 50,
        },
        {
            name:"MatLAB",
            value: 98,
        },
        {
            name:"MS OFFICE",
            value: 45,
        },
        {
            name:"Springboot",
            value: 25,
        },
        {
            name:"Svelte",
            value: 15,
        },
        {
            name:"Git",
            value: 85,
        },
        {
            name:"Linux",
            value: 75,
        },

        

    ]
    function fof(idx: number): string {
        let temp='row-span-1'
        if ((idx%6) ==0){
            temp = 'row-span-2' 
        }
        else if (idx%6==0){
            temp = 'col-span-2'
        }
        return temp
    }


</script>



<!-- <div class="w-full h-half text-token card p-4 space-y-4"> -->
<div class="flex flex-row gap-2 lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-hidden  p-2 ">
    {#each demoArr as item, idx}
        <div class="max-lg:card inline-flex gap-4 p-2 ">
                <ProgressRadial value={item.value} stroke={200} meter="stroke-surface-500/80 dark:stroke-surface-300" track="stroke-surface-500/20" width={((idx%2)==0) ? "w-40" : "w-32"}  >
                    {item.name}
                </ProgressRadial>
            
        </div>
    {/each}
</div>