<script>
    import ScrollyDoor from "../lib/ScrollyDoor.svelte";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    const options = {
        threshold: [0.85, 0.95],
    };

    let content = "Thus, these loans are key to achieving homeownership, and whether they're approved or denied can make all the difference.";
    let contentIsVisible = false;
    
        const showContentkCallback = (entries, observer) => {
        entries.forEach((entry) => {
            const elem = entry.target;

            if (entry.intersectionRatio >= 0.9) {
                // elem.style.backgroundColor = "#e3ff00";
                contentIsVisible = true;
            } 
        });
    };

    const removeContentCallback = (entries, observer) => {
        entries.forEach((entry) => {
            const elem = entry.target;
            if (entry.intersectionRatio >= 0.9) {
       
                contentIsVisible = false;
            }
        });
    };
</script>

<ScrollyDoor callback={showContentkCallback} {options}>
 
    {#if contentIsVisible}
        <p in:fly={{ y: 200, duration: 2000 }}>
            Thus, these loans are key to achieving homeownership, 
            and whether they're approved or denied can make all the difference.
        </p>

    {/if}
</ScrollyDoor>



<style>
p {
  transition: transform 0.2s ease-in-out; /* Smooth transition for the zoom effect */
}

/* p:hover {
  transform: scale(1.2); 
} */
</style>