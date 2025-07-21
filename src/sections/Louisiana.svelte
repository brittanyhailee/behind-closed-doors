<script>
    import RippedPaper from '../lib/RippedPaper.svelte';


    import * as Highcharts from "highcharts";
    import "highcharts/modules/exporting";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import RippedPaper2 from '../lib/RippedPaper2.svelte';
    import ObservedArticleText from '../lib/ObservedArticleText.svelte';

    const options = {
        threshold: [0.85, 0.95],
    };

    const addBackground = (entries, observer) => {
        entries.forEach((entry) => {
            const elem = entry.target;
            console.log(entry);

            if (entry.intersectionRatio >= 0.9) {
                elem.style.backgroundColor = "#DED9BC";
                // duckIsVisible = true;
            } else if (entry.intersectionRatio < 0.9) {
                elem.style.backgroundColor = "#888888";
            }
        });
    };


</script>


<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
</svelte:head>
<div>
  
    <Scroller layout="center">
        {#snippet sticky()}
            <img style="width:400px; opacity:0.5;"src="./louisiana.svg" alt="Map of Louisiana"/>

        {/snippet}

        {#snippet scrolly()}
            <ObservedArticleText callback={addBackground} {options}>
                In a 2023 <a target="_blank" href="https://louisianacommercialrealty.com/2025/04/11/louisiana-commercial-realty-uncovers-loan-discrimination-in-new-orleans-housing/">report</a>, it was found that African Americans in the New Orleans–Metairie area were 
                denied home loans at rates up to <span style="text-decoration:underline;">55% higher</span> than White applicants in the same income bracket.
                <!-- Homeownership is crucial in accumulating wealth through investments.  -->
            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                Furthermore, in 2023, while 22,701 loans were approved totaling $3 billion, 
                African American applicants were denied loans worth $319 million, representing about 32% of their applications.
            </ObservedArticleText>
            <ObservedArticleText callback={addBackground} {options}>
                This denial rate of 32% for African Americans is nearly double that of White applicants at 18%.           
            </ObservedArticleText>
             <ObservedArticleText callback={addBackground} {options}>
                <p style="text-align:center;">But what causes this racial disparity?</p>
            </ObservedArticleText>

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

