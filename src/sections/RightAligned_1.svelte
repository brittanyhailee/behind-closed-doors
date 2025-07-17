<script>
    import RippedPaper from '../lib/RippedPaper.svelte';

    let text = 'Welcome to the KWK Data Scrollytelling Template!'

    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";


</script>


<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
</svelte:head>
<div>
  
    <Scroller layout="right">
        {#snippet sticky()}
          
            <p>
                The configuration is done through the
                <code>options</code> json object passed to the chart, which you'll
                see in the source code for this template.
            </p>
            <p>
                Use the
                <a href="https://api.highcharts.com/highcharts/"
                    >API reference</a
                >
                to understand what each element in the <code>options</code> object
                does.
            </p>
        {/snippet}

        {#snippet scrolly()}
            <RippedPaper>
                After a long day, don't we think: "I can't wait to get home"?
                <!-- Homeownership is crucial in accumulating wealth through investments.  -->
            </RippedPaper>

            <ArticleText>
                This is a <strong>basic example</strong> of how you might create
                a scrollytelling piece using Svelte and Highcharts.
            </ArticleText>

            <ArticleText>
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
            </ArticleText>
        {/snippet}
    </Scroller>
</div>

<style>

</style>
