<script>
    import * as Highcharts from "highcharts";
    import { Chart } from "@highcharts/svelte";

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

<div class="chart">
    <Chart bind:chart {options} highcharts={Highcharts} />
</div>

<style>
 
    
    .chart {
        width: 750px;
        margin: 0 auto;
        top: 20px;
        position: sticky;
    }
       @media (max-width:768px) {
        .chart {
            width: 90vw;
            height: 55vh;
       
        }
    }
</style>
