<script>
    let { title, children } = $props();
</script>

<div class="title">
    <h1>
        {@render children()}
    </h1>
</div>

<style>
    .title {
        font-family: "Special Elite";
    }
</style>
