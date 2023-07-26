<script>
    import Skills from "$lib/components/Skills.svelte";
import { Accordion, AccordionItem, ProgressRadial } from "@skeletonlabs/skeleton";
let demoArr= [ 
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

    let listData = [
            {   id: "1",
                label: "Job Position A",
                date: "01.01.2023 - 02.02.2024",
                content:["Company A", "content and content waas content ran content ant content a"],
                tags: [ "React", "Material"],
            },
            {   
                id:"2",
                label: "Job Position B",
                date: "01.01.2023 - 02.02.2024",
                content: ["Company B", "content and content a content a content a content a"],
                tags: [ "Java", "Selenium"],
            },
            {   
                id:"2",
                label: "Job Position B",
                date: "01.01.2023 - 02.02.2024",
                content: ["Company B", "content a content a content a content a content a"],
                tags: [ "Java", "Selenium"],
            },{   
                id:"2",
                label: "Job Position B",
                date: "01.01.2023 - 02.02.2024",
                content: ["Company B", "content a content a content a content a content a"],
                tags: [ "Java", "Selenium"],
            }
        ]
    
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 justify-center items-center">
    
    
    <div class="card card-hover h-full p-4 space-y-4 ">
        <!-- <dl class="list-dl"> -->
            <h1>Experiences</h1>
                <Accordion class="">
                    {#each listData as v, i}
                    <AccordionItem open={(i==0 || i==1) ? true : false}>
                        <svelte:fragment slot="lead">
                            <svg viewBox="0 0 100 100" class="fill-token w-4 h-4" >
                                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="bg-surface-700 dark:white" />
                                <circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="surface-100" />
                            </svg>
                        </svelte:fragment>
                        <svelte:fragment slot="summary">
                            <div class="flex flex-col sm:flex-row gap-2 justify-between">
                                <span>{v.label}</span> 
                                <span>{v.date}</span>
                            </div>                            
                        </svelte:fragment>
                        <svelte:fragment slot="content">
                            <dl class="list-dl">
                                {#each v.content as con }                                                                    
                                    <div>
                                        <span class="badge">
                                            <svg viewBox="0 0 50 50" class="fill-token w-4 h-4">
                                                <circle cx="25" cy="25" r="15" stroke="black" stroke-width="3" fill="surface-100" />
                                            </svg>
                                        </span>
                                        <span class="text-ellipsis overflow-hidden">
                                            
                                            <dd>{con}</dd>

                                        </span>
                                    </div>
                                {/each}
                            </dl>
                            <br />
                            <div class="flex flex-col sm:flex-row gap-2">
                                {#each v.tags as tag}
                                <span class="chip variant-filled bg-surface-500/80 dark:bg-surface-300">{tag}</span>
                                {/each}
                            </div>
                        </svelte:fragment>
                    </AccordionItem>                    
                    {/each}
                </Accordion>
                
    </div>
    
    <div class=" card card-hover p-4 space-y-4">
       
        <section class="p-4">
            <Skills />
        </section>
    </div>
    
</div>