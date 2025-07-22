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

    let title ="A home and a future"


</script>


<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=IM+Fell+Double+Pica:ital@0;1&family=Special+Elite&display=swap" rel="stylesheet">
</svelte:head>

  
    <Scroller {title} layout="center">
        
        {#snippet sticky()}
       
            <img style="width:400px;" src="./house.gif" alt="Home with falling leaves"/>

        {/snippet}

        {#snippet scrolly()}
            <ObservedArticleText callback={addBackground} {options}>
                Homeownership extends far beyond having the comfort of calling a place home, as it is crucial in accumulating wealth through
                investments.  
            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                In other words, owning a home can can set the foundation of a family's or individual's future.
            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                Because the value of a home is likely to increase, when a home is sold, this allows the previous homeowner
                to profit off of their home.
            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                Finally, owning a home provides stability. There are no fluctuating rental costs to worry about, 
                and in the long run, homes can serve as a <a target="_blank" href="https://www.securitybankusa.bank/blog/post/the-benefits-of-home-ownership">collateral for loans</a>, opening opportunities for funds to 
                pay off other significant expenses in life. 
            </ObservedArticleText>

            <ObservedArticleText callback={addBackground} {options}>
                Everybody deserves a home that gives them comfort for the present, and a the foundation for the future.
            </ObservedArticleText>
          
        {/snippet}
    </Scroller>