<script>
    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import dollar from '../../public/dollar-sign.gif';
    import RippedPaper from "../lib/RippedPaper.svelte";
    import { fly } from "svelte/transition";

</script>

<div>
    <Scroller layout="left">
        {#snippet sticky()}
            <img src={dollar} alt="Dollar sign" class="dollar"/>
          
        {/snippet}

        {#snippet scrolly()}
            <RippedPaper>
                Homes are costly, and loans significantly make it possible to 
                purchase one as they allow buyers to pay a portion of the cost, 
                with the loan helping to pay for the rest. 
            </RippedPaper>

            <!-- <RippedPaper>
                Thus, these loans are key to achieving homeownership, and 
                whether they're approved or denied can make all the difference.
            </RippedPaper> -->
        {/snippet}
    </Scroller>
</div>

<style>
    .dollar {
        height: 400px;
        width: 200px;

    }
    /* .sticky {
        position: sticky;
        top: 50vh;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 0;
    } */

</style>
