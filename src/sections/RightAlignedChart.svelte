<script>
    import * as Highcharts from "highcharts";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import ScrollerColumn from "../lib/ScrollerColumn.svelte";
    import ObservedArticleText from "../lib/ObservedArticleText.svelte";


    let chart;
    const optionsThresh = {
        threshold: [0.85, 0.95],
    };

    let options = {
        chart: {
            type: 'column',
            backgroundColor: 'white',
        },
        title: {
            text: 'Nationwide Denied Applications for Conventional Loans by Race/Ethnicity for 2023',
            style: {
                color: 'black',
                fontSize: '18px',
            }
        },
        subtitle: {
            text: 'Source: <a target="_blank" href="https://blackwealthdata.org/explore/homeownership">Black Wealth Data Center</a>'
        },
        xAxis: {
            categories: ['Asian', 'Black or African American', 'Hispanic or Latino', 'White'],
            crosshair: true,
            labels: {
                style: {
                    color: 'Black',
                    fontSize: '13px',
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Action Taken per 100 People',
               
            },
            labels: {
                style: {
                    color: 'Grey',
                    fontSize: '13px',
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px;color:"black";">{point.key}&nbsp;&nbsp;&nbsp;</span><table>',
            pointFormat: '<tr><td style="color:"black";padding:2px">{point.y} per 100 People</td></tr>',
            footerFormat: '</table>',
            
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                borderWidth: 0,
                
            }
        },
        series: [
            {
                showInLegend: false,
                data: [0.51, 0.65, 0.47, 0.49],
                colorByPoint: true,
                colors: ['#122436', '#465048', '#BD916F', '#C0B283'],
                shadow: { 
                    color: 'rgba(0,0,0,0.5)',
                    offsetX: 2,
                    offsetY: 2,
                    opacity: 0.7,
                    width: 5
                }
            }
        ]
    };

       const callback = (entries, observer) => {
        entries.forEach((entry) => {
            const elem = entry.target;

            if (entry.intersectionRatio >= 0.9) {
                // "active" state
                // elem.style.backgroundColor = "pink";
            } else if (entry.intersectionRatio < 0.9) {
                // "inactive" state
                // elem.style.backgroundColor = "green";
            }
        });
    };
</script>

<div>
    <ScrollerColumn layout="right">
        {#snippet sticky()}
            <div class="chart">
                <Chart bind:chart {options} highcharts={Highcharts} />
        
            </div>
            <div class="chart-caption">
                <p style="font-size:13px;">
                    <i>The chart above shows that per 100 people that apply for Conventional Loans, 0.51 Asians,
                        0.65 Black or African Americans, 0.47 Hispanic or Latinos, and 0.49 White people, are denied.
                    </i>
                </p>
            </div>
      
         
         
        {/snippet}

        {#snippet scrolly()}
        <div class="wrapper">
             <ObservedArticleText {callback} {optionsThresh}>
                <p><span style="text-decoration:underline;"><a target="_blank"
                    href="https://www.investopedia.com/articles/mortgages-real-estate/08/homebuyer-financing-option.asp">Conventional loans</a></span> are the most popular type of loan for purchasing a home.
                These are loans that from private lenders such as banks and credit unions. 
                </p>
            </ObservedArticleText>

            <ObservedArticleText {callback} {optionsThresh}>
                <p>They generally have stricter requirements such as 
                    a larger downpayment and a higher credit score.</p>
                </ObservedArticleText>


            <ObservedArticleText {callback} {optionsThresh}>
                <p>From the data, we can observe that per 100 people, Black or African Americans experience
                    <span style="text-decoration:underline;">more</span> conventional loan denials relative to their population. </p>

            </ObservedArticleText>
        </div>

        {/snippet}
    </ScrollerColumn>
</div>

<style>

  
     .chart {
        /* width: 600px; */
        width: 90%;
        margin: 0 auto;
        /* margin-right: 50px; */

    }
    .chart-caption {
        width: 30vw;
        max-width: 600px;
        font-family: sans-serif;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
   

</style>
