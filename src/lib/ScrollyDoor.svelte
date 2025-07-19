<script>

    export let content;
</script>

<div class="wrapper">
    <div class="sticky">
        <div class="scroll-container">
            <!-- {@render barChart()} -->
            <article class="content">{content}</article>
        </div>
    </div>
</div>

<style>
    .wrapper {
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
        /* width: 15vw; */
        width: 15vw;
        font-size: 20px;
        /* z-index: 2; */
        justify-content: center;

        margin-right: 142px; 
        font-size: clamp(12px, 2vw, 20px);
    }


    @media (max-width: 768px) {
        .content {
            font-size: 12px;
            margin-right: 100px; 
            /* height: 5vh; */
            /* margin-right: 120px;  */
            
        }

    
    }
</style>