<script>
    import { onMount } from "svelte";


    let { children, callback, optionsThresh } = $props();

    // this uniqueId just lets us target the element 
    // with `document.getElementById(uniqueId)` later on.
    // it's a little hacky, but it works. 
    let uniqueId = Math.random().toString();

    // here we define the onMount() function for this component.
    // svelte handles calling the onMount() function *after* all of the HTML in this
    // component has been mounted to the DOM. we have to put the intersection observer
    // stuff in onMount() because we need to target the <div> we create below,
    // but it won't actually exist in the DOM until it's been mounted. 
    onMount(() => {
        let intersectionObserver = new IntersectionObserver(callback, optionsThresh);

        const observedElement = document.getElementById(uniqueId);
        intersectionObserver.observe(observedElement);
    });
</script>

<!-- assign the containing div the id `uniqueId` so we can target it -->
<div id={uniqueId} class="article-text">
    <p>
        {@render children()}
    </p>
</div>

<style>
    .article-text {
        margin: 25vh auto;
        width: 50%;
        /* background-color: #ff99fc;
        color: #007052;
        border: solid #8427c9 3px;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 16px 16px #8aa6df; */
        padding-left: 0px;
        background-image: url('/ripped_paper3.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 20em;
        width: 70%;
        display: flex;
        align-content: center;
        justify-content: center;
        font-family: "Special Elite";
        padding: 5px;
    }
    p {

        margin: 0;
        text-align: center;
        margin-top: 50px;
        font-size: 18px;
        width: 60%;
    }
    @media (max-width:1300px) {
        p {

        font-size: 16px;
        margin-top: 60px; 
        }
       
    }
    @media (max-width:980px) {
        p {

        font-size: 13px;
        margin-top: 40px; 
        }
        .article-text {
            height: 15em;
        }
    }

    @media (max-width:870px) {
        p {

        font-size: 13px;
        margin-top: 40px; 
        }
        .article-text {
            height: 15em;
        }
    }
    @media (max-width:600px) {
        p {

        font-size: 15px;
 
        }
        .article-text {
            height: 15em;
        }
    }
</style>
