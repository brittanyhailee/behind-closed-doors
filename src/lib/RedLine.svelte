<script>

    let { title, callback, options } = $props();

    import { onMount } from "svelte";

    onMount(() => {
        let intersectionObserver = new IntersectionObserver(callback, options);

        const observedElement = document.getElementById('title');
        intersectionObserver.observe(observedElement);
    });
</script>

<div class='container'>
    <h1 id="title">{title}</h1>
</div>

<style>
    .container {
        text-align: center;
        font-size: 30px;
        margin:0;
    }
    h1 {
        margin: 0;
    }
    

    @media (max-width: 768px) {
        .container {
            font-size: 20px;
        }
    }
    
</style>