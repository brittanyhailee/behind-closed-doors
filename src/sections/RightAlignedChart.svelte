<script>
    import * as Highcharts from "highcharts";
    import { Chart } from "@highcharts/svelte";
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import ScrollerColumn from "../lib/ScrollerColumn.svelte";


    let chart;

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
            <ArticleText>
                <strong>Welcome to the KWK Data Scrollytelling Template!</strong
                >
            </ArticleText>

            <ArticleText>
                This is a <strong>basic example</strong> of how you might create
                a scrollytelling piece using Svelte and Highcharts.
            </ArticleText>

            <ArticleText>
                You can use this template as a <strong>starting point</strong>
                for your project.
                <br /><br />
                Or, if you want to build something from scratch, you can use it as
                a <strong>reference</strong> for specific functionality.
            </ArticleText>

            <ArticleText>
                This is <strong>just one way</strong> that scrollytelling can
                look.
                <br /><br />
                <strong>
                    If you use this template, be sure to modify it and make it
                    your own!
                </strong>
            </ArticleText>
        {/snippet}
    </ScrollerColumn>
</div>

<style>
     .chart {
        /* width: 600px; */
        width: 90%;
        margin: 0 auto;
        /* top: 100px;
        position: sticky; */
    }
    .chart-caption {
        width: 30vw;
        max-width: 600px;
    }

/*     
       @media (max-width:768px) {
        .chart {
            width: 70vw;
            height: 55vh;
       
        }
    } */
</style>
