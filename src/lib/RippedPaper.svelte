<script>
    
</script>

<div class="article-text">
    <p class='text'>
        <slot />
    </p>
</div>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
</svelte:head>

<style>
    .article-text {
        margin: 50vh auto;
        width: 60%;
        background-image: url('/ripped_paper.png');
        height: 20em;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;


        display: flex;
        justify-content: center;
        
        align-items: center;     /* vertically center */
        text-align: center;     
        word-wrap: break-word;
        padding: 1em;
    }

    .text {
        width: 200px;
        margin: 0;
        align-self: center;
        font-family: "Special Elite";
    }


</style>
