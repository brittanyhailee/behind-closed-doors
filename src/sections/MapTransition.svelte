<script>
    import ImgTransition from "../lib/ImgTransition.svelte";
    import topImage from '/top.svg';
    import baseImage from '/base.svg';
    
    
    
    let title = "What does this mean?";
    let content = "While this statistic doesn’t show the denial rate among applicants, it highlights that denials disproportionately impact Black communities."
   

</script>


<ImgTransition {title} baseImageSrc={baseImage} topImageSrc={topImage} text={content}/>