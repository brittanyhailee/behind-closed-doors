<script>
    import RedLine from "../lib/RedLine.svelte";
    import { fade, fly } from "svelte/transition";
    import Scroller from "../lib/Scroller.svelte";
    import ObservedArticleText from "../lib/ObservedArticleText.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import BankImg from '/bank.svg';
    import ScrollerNoTitle from "../lib/ScrollerNoTitle.svelte";

    let lineIsVisible = $state(false);

    let title = "Redlining"

    const options = {
        threshold: [0.85, 0.95],
    };

    const showLine = (entries, observer) => {
        entries.forEach((entry) => {
            const elem = entry.target;
            console.log(entry);

            if (entry.intersectionRatio >= 0.9) {
        
                lineIsVisible = true;
            } else if (entry.intersectionRatio < 0.9) {
     
                lineIsVisible = false;
            }
        });
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

<ScrollerNoTitle layout="right">
    {#snippet sticky()}
        <RedLine title={title} callback={showLine} {options}/>
            {#if lineIsVisible}
                    <div 
                    class="line" 
                    in:fly={{ x: -200, duration: 1500 }}
                                out:fly={ {x: 200, duration: 1500} }>
                    </div>
                        
            {/if}
    {/snippet}
    {#snippet scrolly()} 
        <ArticleText>According to the Legal Information Institute of Cornell Law School, <a target="_blank" href="https://www.law.cornell.edu/wex/redlining">
            Redlining</a> can be defined as "a <span style="text-decoration:underline;text-decoration-color:#D2042D;">discriminatory practice that consists of the systematic denial of services</span> 
            such as mortgages, insurance loans, and other financial services to residents of certain areas, based on their race or ethnicity."</ArticleText>
        <ArticleText>What can redlining look like?</ArticleText>

        <ObservedArticleText callback={addBackground} {options}>
            Imagine an African American woman with a strong financial profile who dreams of becoming an entrepreneur walking into a bank to apply for a business loan.
            <br>
            <img src={BankImg} style="width:90px;height:90px;display:block; margin: 0 auto;" alt="Sketch of a bank"/>
        </ObservedArticleText>
        <ObservedArticleText callback={addBackground} {options}>
            Believing she is receiving the best guidance, she unknowingly agrees to an inferior loan even if she qualifies for better options.
        </ObservedArticleText>
        <ObservedArticleText callback={addBackground} {options}>
            Now, imagine a White woman with a financial profile less impressive than the previous applicant, who also dreams of becoming an entrepreneur.            
            She walks into a bank to apply for a business loan. 
            <br>
            <img src={BankImg} style="width:90px;height:90px;display:block; margin: 0 auto;" alt="Sketch of a bank"/>
        </ObservedArticleText>
        <ObservedArticleText callback={addBackground} {options}>
            Despite having a weaker financial profile to the previous applicant, she receives the best guidance, and she was provided better options.
        </ObservedArticleText>
         <ObservedArticleText callback={addBackground} {options}>
            This is similar to the study done by the researchers in the paper, "<a target="_blank" 
            href="https://journals.sagepub.com/doi/abs/10.1177/00222437231176470">Revealing and Mitigating Racial Bias and Discrimination in Financial Services</a>".
        </ObservedArticleText>
        <ObservedArticleText callback={addBackground} {options}>
            Researchers of the study found that the Black participants, even with a superior financial profile, were less likely to be offered the business line of credit (BLOC)
            than White participants.
        </ObservedArticleText>
         <ObservedArticleText callback={addBackground} {options}>
            Thus, redlining can present itself in a number of ways, such as being denied access to credit because of where you live,
            being offered the less ideal option, or not receiving enough support throughout a financial process.

        </ObservedArticleText>

    {/snippet}
    
    </ScrollerNoTitle>

<style>

    .line {
        border-bottom: 5px dashed #D2042D; 
        width:60%;
        margin:0;
    }

    @media (max-width:750px) {
        .line {
            width: 50%;
        }
    }
</style>