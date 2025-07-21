<script>
    import RippedPaper from '../lib/RippedPaper.svelte';

    let text = 'Welcome to the KWK Data Scrollytelling Template!'

    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import RippedPaper2 from '../lib/RippedPaper2.svelte';


</script>


<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
</svelte:head>
<div>
  
    <Scroller layout="right">
        {#snippet sticky()}
            <img style="width:400px;"src="./house.svg" alt="Drawing of a home"/>

        {/snippet}

        {#snippet scrolly()}
            <ArticleText>
                After a long day, don't we think: "I can't wait to get home"?
                <br>After all, a home provides comfort and security.
                <!-- Homeownership is crucial in accumulating wealth through investments.  -->
            </ArticleText>

            <ArticleText>
                For Black or African American homebuyers, however, the experience of calling a place 'home' is 
                a dream further out of reach.
            </ArticleText>
            

            <!-- <ArticleText>
                You can use this template as a <strong>starting point</strong>
                for your project.
                <br /><br />
                Or, if you want to build something from scratch, you can use it as
                a <strong>reference</strong> for specific functionality.
            </ArticleText>

            <ArticleText>
                This is <strong>just one way</strong> that scrollytelling can
                look.
                <br /><br />
                <strong>
                    If you use this template, be sure to modify it and make it
                    your own!
                </strong>
            </ArticleText> -->
        {/snippet}
    </Scroller>
</div>

<style>

</style>
