<script>
    import "highcharts/modules/exporting";
    import Scroller from "../lib/Scroller.svelte";
    import ObservedArticleText from '../lib/ObservedArticleText.svelte';
    import houseGif from '../../public/house.gif';

    const options = {
        threshold: [0.85, 0.95],
    };
    
   const addBackground = (entries, observer) => {
        entries.forEach((entry) => {
            const elem = entry.target;
            console.log(entry);

            if (entry.intersectionRatio >= 0.9) {
                elem.style.backgroundColor = "#DED9BC";
            } else if (entry.intersectionRatio < 0.9) {
                elem.style.backgroundColor = "#888888";
            }
        });
    };


</script>


<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
</svelte:head>

  
    <Scroller layout="center">
        {#snippet sticky()}
            <img style="width:400px;" src="./house.gif" alt="Home with falling leaves"/>

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

          
        {/snippet}
    </Scroller>