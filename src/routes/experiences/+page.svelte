<script>
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
    
    let listData = [
            {   id: "1",
                label: "Job Position A",
                date: "01.01.2023 - 02.02.2024",
                content:["Company A", "content a content a content a content a content a"],
                tags: [ "React", "Material"],
            },
            {   
                id:"2",
                label: "Job Position B",
                date: "01.01.2023 - 02.02.2024",
                content: ["Company B", "content a content a content a content a content a"],
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

<div class="container h-full mx-auto flex flex-row gap-4 p-4 justify-top items-baseline">
    
    
    <div class="w-full h-half text-token card p-4 space-y-4">
        <!-- <dl class="list-dl"> -->
            <h1>Experiences</h1>
                <Accordion>
                    {#each listData as v, i}
                    <AccordionItem open={(i%2) ==0 ? true : false}>
                        <svelte:fragment slot="lead">
                            <svg viewBox="0 0 100 100" class="fill-token w-4 h-4" >
                                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="bg-surface-700 dark:white" />
                                <circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="surface-100" />
                            </svg>
                        </svelte:fragment>
                        <svelte:fragment slot="summary">
                            <div class="flex flex-row gap-2 justify-between">
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
                                    <span class="flex-auto">
                                        
                                        <dd>{con}</dd>

                                    </span>
                                </div>
                                <!-- ... -->
                                {/each}
                            </dl>
                             <br />
                            <div class="flex flex-row gap-2">
                                {#each v.tags as tag}
                                <span class="chip variant-filled">{tag}</span>
                                {/each}
                            </div>
                        </svelte:fragment>
                    </AccordionItem>                    
                    {/each}
                </Accordion>
                
    </div>
    <div class="w-full h-half text-token card p-4 space-y-4">
        <h1>Education</h1>
                <Accordion>
                    {#each listData as v}
                    <AccordionItem open>
                        <svelte:fragment slot="lead">
                            <svg viewBox="0 0 100 100" class="fill-token w-4 h-4" >
                                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="bg-surface-700 dark:white" />
                                <circle cx="50" cy="50" r="20" stroke="black" stroke-width="3" fill="surface-100" />
                            </svg>
                        </svelte:fragment>
                        <svelte:fragment slot="summary">
                            <div class="flex flex-row gap-2 justify-between">
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
                                    <span class="flex-auto">
                                        
                                        <dd>{con}</dd>

                                    </span>
                                </div>
                                <!-- ... -->
                                {/each}
                            </dl>
                             <br />
                            <div class="flex flex-row gap-2">
                                {#each v.tags as tag}
                                <span class="chip variant-filled">{tag}</span>
                                {/each}
                            </div>
                        </svelte:fragment>
                    </AccordionItem>                    
                    {/each}
                </Accordion>
                
    </div>

</div>