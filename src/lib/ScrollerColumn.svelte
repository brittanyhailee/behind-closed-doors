<script>
    // `layout` can be either "right" or "left"
    // `sticky` and `scrolly` are the snippets passed in (see one of the examples)
    let { layout, sticky, scrolly, title } = $props(); 
</script>


<div class="title-container">
        <div class="title">
            <h1>{title}</h1>
        </div>
    </div>

<div class="wrapper {layout}">
    <div class="sticky">
        {@render sticky()}
    </div>

    <div class="scrolly">
        {@render scrolly()}
    </div>
</div>

<style>

    .title-container {
        text-align: center;
        width: 100%;
        position: relative;
        height: 20vh;
        padding: 0;
        margin: 0;
    }
  
     .title {
        position: sticky;
        top: 20px;
        width: 100%;
        /* font-family: "Special Elite"; */
        font-family: "IM Fell Double Pica";
        z-index: 10;
        
        margin: 0;
    }

    .title h1 {
        font-size: 2em;
    }
    .wrapper {
        overflow: none;
        background-color: #f7f5eb;
        padding: min(100vh, 30rem) 1rem;
        border-style: solid;
        /* border-color: #4096fa; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        
    }

    .left .scrolly {
        order: 0;
    }
    .left .sticky {
        order: 1;
    }

    .right .scrolly {
        order: 1;
    }
    .right .sticky {
        order: 0;
    }

    .sticky,
    .scrolly {
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
        z-index: 0;
    }

    .scrolly {
        z-index: 1;
    }

    @media (max-width: 768px) {
        .title-container {
            width:100%;
            font-size: 20px;
        }
        .title h1 {
            font-size: 25px;
        }
        .wrapper {
            flex-direction: column;
            padding: 2rem 1rem;
            /* width: 100%; */
        }

        .sticky,
        .scrolly {
            flex: 1 1 auto;
            min-width: 100%;
            position: static; /* remove sticky on mobile */
            transform: none;
        }

        .sticky {
            margin-bottom: 2rem;
        }


        .left .scrolly {
        order: 1;
        }
        .left .sticky {
            order: 0;
        }
    }
</style>
