<script>

    import "highcharts/modules/exporting";
    import Scroller from "../lib/Scroller.svelte";
    import ObservedArticleText from '../lib/ObservedArticleText.svelte';
    import NewOrleansLoanDenial from '/public/NewOrleansLoanDenial.png'

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
<div>
  
    <Scroller layout="center">
        {#snippet sticky()}
            <img style="width:400px; opacity:0.5;"src="./louisiana.svg" alt="Map of Louisiana"/>

        {/snippet}

        {#snippet scrolly()}
            <ObservedArticleText callback={addBackground} {options}>
                In a 2023 <a target="_blank" href="https://louisianacommercialrealty.com/2025/04/11/louisiana-commercial-realty-uncovers-loan-discrimination-in-new-orleans-housing/">report</a>, it was found that African Americans in the New Orleans–Metairie area were 
                denied home loans at rates up to <span style="text-decoration:underline;text-decoration-color:#D2042D;">55% higher</span> than White applicants in the same income bracket.            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                Furthermore, in 2023, while 22,701 loans were approved totaling $3 billion, 
                African American applicants were <span style="text-decoration:underline;text-decoration-color:#D2042D;">denied loans worth $319 million</span>, representing about 32% of their applications.
            </ObservedArticleText>
            <ObservedArticleText callback={addBackground} {options}>
                This denial rate of 32% for African Americans is <span style="text-decoration:underline;text-decoration-color:#D2042D;">
                    nearly double</span> that of White applicants at 18%.           
            </ObservedArticleText>

             <ObservedArticleText callback={addBackground} {options}>
                <div class="graphImg">
                    <img src={NewOrleansLoanDenial} style="width:70%; height:80%;" alt="Loan Denial by Race (Black/African American & White) in New Orleans, 2023 "/>
               </div>
                <p style="text-align:center;">From the graph by the <a target="_blank" href="https://louisianacommercialrealty.com/2025/04/11/louisiana-commercial-realty-uncovers-loan-discrimination-in-new-orleans-housing/">
                Louisiana Commercial Realty,</a> we observe that across all income brackets, there is a greater rate of 
                loan denials experienced by Black or African Americans in Louisiana.</p>
            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                <p style="text-align:center;">The Louisiana Commercial Realty explains that the excess denials 
                    that occur in the income bracket exceeding 100% of the New Orleans MSA average totals $75 million. 
                </p>
            </ObservedArticleText>
              <ObservedArticleText callback={addBackground} {options}>
                <p style="text-align:center;">What does this look like for homeowners? Well, since the average loan application was $201,000, that would have denied an 
                    additional 375 home purchases.
                </p>
            </ObservedArticleText>
             

            <ObservedArticleText callback={addBackground} {options}>
                <p style="text-align:center;">This goes to show the impact that loans have in a family or individual's ability to purchase a home.
                </p>
            </ObservedArticleText>


             <ObservedArticleText callback={addBackground} {options}>
                <p style="text-align:center;">But what could cause this racial disparity?</p>
            </ObservedArticleText>
            

          
        {/snippet}
    </Scroller>
</div>

<style>
.graphImg {
    margin:auto;
    display: flex;
    justify-content: center;
}
</style>

