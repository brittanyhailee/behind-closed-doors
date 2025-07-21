<script>
  import LeftAlignedExample from "./sections/LeftAlignedExample.svelte";
  import RightAlignedExample from "./sections/RightAlignedExample.svelte";
  import RightAligned from "./sections/RightAligned_1.svelte";
  import ImageExample from "./sections/ImageExample.svelte";
  import TitleSection from "./sections/TitleSection.svelte";
  import InteresectionObserverBasicExample from "./sections/InteresectionObserverBasicExample.svelte";
  import IntersectionObserverAlertExample from "./sections/IntersectionObserverAlertExample.svelte";
  import DisappearingDuckExample from "./sections/DisappearingDuckExample.svelte";
  import IntersectionObserverSectionCard from "./sections/IntersectionObserverSectionCard.svelte";
  import IntersectionObserverListExample from "./sections/IntersectionObserverListExample.svelte";
  import Doors from './lib/Doors.svelte';
  import LeftAligned_1 from "./sections/LeftAligned_1.svelte";
  import DoorsImg from '/house.svg'
  import ScrollyFocus from "./lib/ScrollyDoor.svelte";
  import ScrollyDoor from "./lib/ScrollyDoor.svelte";
  import DoorIntersectionObserver from "./sections/DoorIntersectionObserver.svelte";
  import LoanDenialsColumn from "./lib/LoanDenialsColumn.svelte";
  import RightAlignedChart from "./sections/RightAlignedChart.svelte";
  import ImgTransition from "./lib/ImgTransition.svelte";
  import MapTransition from "./sections/MapTransition.svelte";
  import IntersectionObserverMap from "./sections/IntersectionObserverMap.svelte";
  import TextOverlay from "./sections/Louisiana.svelte";
  import Louisiana from "./sections/Louisiana.svelte";

  let title = 'hi'
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

      


   <!-- <ImageExample /> -->

  <!-- <IntersectionObserverSectionCard />
  <InteresectionObserverBasicExample /> -->
 <!-- <IntersectionObserverAlertExample />
  <DisappearingDuckExample />
  <IntersectionObserverListExample /> -->
</main>
