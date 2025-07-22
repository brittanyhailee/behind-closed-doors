<script>
    import { onMount } from "svelte";
    export let callback; // add this
    export let options; // add this
    
    let uniqueId = Math.random().toString();

    onMount(() => {
        let intersectionObserver = new IntersectionObserver(callback, options);

        const observedElement = document.getElementById(uniqueId);
        intersectionObserver.observe(observedElement);
    });


</script>

<div class="wrapper">
    <div class="sticky">
        <div class="scroll-container">
      
            <article id={uniqueId} class="content">
                <slot/>
            </article>
            
        </div>
    </div>
</div>

<style>
    .wrapper {
        /* overflow: hidden; */
        background-color: #f7f5eb;
        padding: min(100vh, 30rem) 1rem;
        border-style: solid;
        border-color: black;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        height: 1500px;
        font-family: "Special Elite";
        /* width: 500px; */
    
        /* border-color: #4096fa; */


    
    }


    .sticky {
        display: flex;
        flex-direction: column;
        flex: 1 1; /* Allows growing, shrinking */
    }

    .sticky {
        position: sticky;
        top: 50vh;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        /* z-index: 0; */
        
    }

    .scroll-container {
        display: flex;
        margin: 0;
        /* border: 2px solid black; */
        align-self: center;
        justify-self: center;
        height: 500px;
        width: 60vw;
        background-image: url('/public/open-door.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        align-items: center;
        justify-content: center;
        padding: auto;
        /* background-image: url('/public/icon.png'); */

    }
  
    .content {

        text-align: center;
        width: 20%;
        /* width:15vw; */
        /* width: 20%; */
        font-size: 20px;
        /* z-index: 2; */
        justify-content: center;

        margin-right: 145px; 
        font-size: clamp(12px, 2vw, 20px);
    }

    @media (max-width: 900px) {
        .content {
            font-size: 18px;
            width: 20vw;
        }
    }


    @media (max-width: 768px) {
        .content {
            font-size: 15px;
            margin-right: 130px; 
            width: 20%;
            /* height: 5vh; */
            /* margin-right: 120px;  */
            
        }
        .wrapper {
            padding:15rem 1rem;
            width: 100vw;
        }
        

    
    }
    @media (max-width: 720px) {
        .content {
            font-size: 14px;
            margin-right: 130px; 
            width: 15vw;
            /* height: 5vh; */
            /* margin-right: 120px;  */
            
        }
        .wrapper {
            padding: 15rem 1rem;
            width: 100vw;
        }

    
    }
      @media (max-width: 620px) {
        .content {
            font-size: 12px;
            margin-right: 100px; 
            /* height: 5vh; */
            /* margin-right: 120px;  */
            
        }
        .wrapper {
        padding: 15rem 1rem;
        width: 100vw;
    }

    
    }
</style>