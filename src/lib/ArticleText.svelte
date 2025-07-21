<script>
    let { children } = $props();
</script>

<div class="article-text">
    <p>
        {@render children()}
    </p>
</div>

<style>
    .article-text {
        margin: 50vh auto;
        width: 50%;
        /* background-color: #ff99fc;
        color: #007052;
        border: solid #8427c9 3px;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 16px 16px #8aa6df; */
        border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
        border-style: solid;
        border-width: 2px;
        box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
        box-sizing: border-box;
        color: black;
        cursor: pointer;
        display: inline-block;
        /* font-family: Neucha, sans-serif;
        font-size: 1rem;
        line-height: 23px; */
        font-size: 1.2rem;
        outline: none;
        padding: .75rem;
        text-decoration: none;
        transition: all 235ms ease-in-out;
        border-bottom-left-radius: 15px 255px;
        border-bottom-right-radius: 225px 15px;
        border-top-left-radius: 255px 15px;
        border-top-right-radius: 15px 225px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }
</style>

