<script>
    let { title, baseImageSrc, topImageSrc, text } = $props();

    window.addEventListener('scroll', () => {
    const overlay = document.querySelector('.text-overlay');
    const container = document.querySelector('.image-container');
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    // image is in viewport, reveal overlay
    if (overlay instanceof HTMLElement) {
        overlay.style.bottom = '0';
    }
  } else {
    // image is out of viewport, hide overlay
    if (overlay instanceof HTMLElement) {
        overlay.style.bottom = '-100%';
    }
    
  }
});
    


    window.addEventListener('scroll', () => {
  const container = document.querySelector('.container-fixed');
  const topImage = document.querySelector('.top-image');
  
  const rect = container.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const start = windowHeight;
  const end = -rect.height + windowHeight;
  // progress goes from 0 to 1 as user scrolls through the spacer div
  const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
  
  // Map progress to clip-path (reveal from top to bottom)
  const clipValue = (1 - progress) * 100; // from 100% to 0%
  
//   topImage.style.clipPath = `inset(0 0 ${clipValue}% 0)`;
    if (topImage instanceof HTMLElement) {
        console.log('topImage is HTML')
        topImage.style.clipPath = `inset(0 0 ${clipValue}% 0)`;
    }
});


</script>
<div class="container-fixed">
    
    <div class="title-container">
        <div class="title">
            <h1>{title}</h1>
        </div>
    </div>

    <div class="container">
        
        <img src={baseImageSrc} alt="Map of USA with people" class="base-image" />
        <img src={topImageSrc} alt="Map of USA with less people" class="top-image" />
   
        <div class="text-overlay">
            <p>{text}</p>
        </div>
    
    </div>
</div>


<style>
   
    .container-fixed {
        position: relative;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-content: center;
        height: 800vh; 
        /* height: 180vh; */
        background-color: #f7f5eb;
        /* padding: min(100vh, 30rem) 1rem; */
        padding: 2rem 1rem;
        border-style: solid;
       
    }
    .title-container {
        text-align: center;
        width: 100%;
        position: relative;
        height: 50vh;
        padding: 0;
    }
  
     .title {
        position: sticky;
        top: 20px;
        width: 100%;
        font-family: "Special Elite";
        z-index: 10;
        
        margin: 0;
    }

    .text-overlay {
        position: absolute;
        /* bottom: -100%;  */
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        color: white;
        padding: 1rem;
        text-align: center;
        justify-self: center;
        align-self: center;
        margin: 0;
        margin-top: 200px;
        background: rgba(0,0,0,0.5);
        text-align: center;

        
        width: 50%;
        border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
        border-style: solid;
        border-width: 2px;
        box-shadow: rgba(160, 82, 45, .4) 15px 28px 25px -18px;
        box-sizing: border-box;
        color: white;
        cursor: pointer;
        display: inline-block;
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
    .text-overlay p {
       align-self: center;
       font-size: 20px;

    }

    .container {
        position: sticky;

        top: 50px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }


    .base-image,
    .top-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 80%;
        object-fit: contain; 
        margin-top: 40px;
        margin-left: 150px;
    
    }

    .top-image {
        clip-path: inset(0 0 100% 0); /* fully hidden at first*/
        transition: clip-path 0.2s linear; 
        background-color: #f7f5eb;
    }

     @media (max-width: 880px) {
        .base-image, .top-image {
            height: 80%;
            width: 60%;
            margin-left: 150px;
        }
        .text-overlay {
            width: 50%;
            
        }

        .text-overlay p{ 
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        .base-image, .top-image {
            height: 80%;
            width: 60%;
            margin-left: 80px;
        }
        .text-overlay {
            width: 30%;
            
        }

        .text-overlay p{ 
            font-size: 13px;
        }
    }

     @media (max-width: 730px) {
        .base-image, .top-image {
            width: 60%;
            height: 80%;
            margin-left: 110px;
        }
        .text-overlay {
            width: 50%;
        }
      
    }

</style>
