<script lang="ts">
  import { onMount } from 'svelte';
  let container: HTMLDivElement;
  let scrollY = 0;
  export let title: string;  // Title prop
  export let subtitle: string;  // Title prop

  function handleScroll() {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const progress = Math.min(Math.max(0, 1 - rect.top / windowHeight), 1);
    scrollY = progress;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<style>
  .sliding-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
    border: 3px solid black;
    font-family: "IM Fell Double Pica";
    font-size: 1.7em;

  }
  .door {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    /* background: black;  */
    background: #3a281e;

    z-index: 10;
    transition: transform 0.5s ease-out;
  }
  .left-door {
    left: 0;
    background-image: url('/left-door.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .right-door {
    right: 0;
    background-image: url('/right-door.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .content {
    position: relative;
    z-index: 1;
    height: 100%;
    background: #f7f5eb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('/public/titleBG.gif');
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .content h3 {
    margin: 0;
    font-style: italic;
  }
  .content h1 {
    margin: 0;
  }
</style>

<div class="sliding-container" bind:this={container}>
  <div class="door left-door" style="transform: translateX({-100 * scrollY}%);"></div>
  <div class="door right-door" style="transform: translateX({100 * scrollY}%);"></div>
  <div class="content">
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  
  </div>
</div>
