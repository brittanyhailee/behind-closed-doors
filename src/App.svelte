<script>
  import RightAligned from "./sections/RightAligned_1.svelte";
  import TitleSection from "./sections/TitleSection.svelte";
  import LeftAligned_1 from "./sections/LeftAligned_1.svelte";
  import DoorsImg from '/house.svg'
  import DoorIntersectionObserver from "./sections/DoorIntersectionObserver.svelte";
  import LoanDenialsColumn from "./lib/LoanDenialsColumn.svelte";
  import RightAlignedChart from "./sections/RightAlignedChart.svelte";
  import MapTransition from "./sections/MapTransition.svelte";
  import IntersectionObserverMap from "./sections/IntersectionObserverMap.svelte";
  import TextOverlay from "./sections/Louisiana.svelte";
  import Louisiana from "./sections/Louisiana.svelte";
  import Redlining from "./sections/Redlining.svelte";
  import Conclusion from "./sections/Conclusion.svelte";

</script>

<svelte:head>
  <link rel="icon"  type="image/svg+xml" href={DoorsImg} />
  <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">

</svelte:head>
<main>
  <TitleSection />
  <RightAligned />
  <LeftAligned_1 />
  <DoorIntersectionObserver />
  <RightAlignedChart />
  
  <MapTransition />
  <IntersectionObserverMap />
  <Louisiana />
  <Redlining />

  <Conclusion />

      
</main>
