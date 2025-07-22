<script>
    import Highcharts from 'highcharts/highmaps';
    import { onMount } from 'svelte';
    import { Chart } from '@highcharts/svelte';
    import mapDataUS from '@highcharts/map-collection/countries/us/us-all.geo.json';
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
    import ObservedArticleText from '../lib/ObservedArticleText.svelte';
    import SampleMap from '../../public/BWDCSampleMap.png';
  import ScrollerColumn from '../lib/ScrollerColumn.svelte';

    // HighchartsMap(Highcharts);

    let chartContainer;

    const data = [
    
    {
        'hc-key': 'us-ut',
        value: 0.610, // used for map coloring
        stateName: 'Utah',
        blackPopulation: 0.011, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.790,
            'Black or African American': 0.810,
            'Hispanic or Latino': 0.790,
            'White': 0.560
        },
    },
    {
        'hc-key': 'us-az',
        value: 0.750, // used for map coloring
        stateName: 'Arizona',
        blackPopulation: 0.046, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.710,
            'Black or African American': 0.750,
            'Hispanic or Latino': 0.570,
            'White': 0.600
        },
    },
    {
        'hc-key': 'us-ar',
        value: 0.720, // used for map coloring
        stateName: 'Arkansas',
        blackPopulation: 0.149, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.680,
            'Black or African American': 0.720,
            'Hispanic or Latino': 0.570,
            'White': 0.600
        },
    },
    {
        'hc-key': 'us-la',
        value: 0.760, // used for map coloring
        stateName: 'Louisiana',
        blackPopulation: 0.311, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.460,
            'Black or African American': 0.760,
            'Hispanic or Latino': 0.420,
            'White': 0.500
        },
    },
    {
        'hc-key': 'us-ms',
        value: 0.800, // used for map coloring
        stateName: 'Mississippi',
        blackPopulation: 0.370, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.700,
            'Black or African American': 0.800,
            'Hispanic or Latino': 0.650,
            'White': 0.610
        },
    },
    {
        'hc-key': 'us-al',
        value: 0.790, // used for map coloring
        stateName: 'Alabama',
        blackPopulation: 0.261, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.660,
            'Black or African American': 0.790,
            'Hispanic or Latino': 0.520,
            'White': 0.630
        },
    },
    {
        'hc-key': 'us-ga',
        value: 0.820, // used for map coloring
        stateName: 'Georgia',
        blackPopulation: 0.313, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.750,
            'Black or African American': 0.820,
            'Hispanic or Latino': 0.550,
            'White': 0.560
        },
    },
    {
        'hc-key': 'us-fl',
        value: 0.820, // used for map coloring
        stateName: 'Florida',
        blackPopulation: 0.153, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 1.030,
            'Black or African American': 0.760,
            'Hispanic or Latino': 0.870,
            'White': 0.790
        },
    },
    {
        'hc-key': 'us-sc',
        value: 0.940, // used for map coloring
        stateName: 'South Carolina',
        blackPopulation: 0.253, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.870,
            'Black or African American': 0.940,
            'Hispanic or Latino': 0.750,
            'White': 0.670
        },
    },
    {
        'hc-key': 'us-nc',
        value: 0.840, // used for map coloring
        stateName: 'North Carolina',
        blackPopulation: 0.206, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.840,
            'Black or African American': 0.840,
            'Hispanic or Latino': 0.580,
            'White': 0.620
        },
    },
    {
        'hc-key': 'us-de',
        value: 0.900, // used for map coloring
        stateName: 'Delaware',
        blackPopulation: 0.219, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.740,
            'Black or African American': 0.900,
            'Hispanic or Latino': 0.610,
            'White': 0.590
        },
    },
    {
        'hc-key': 'us-ri',
        value: 1.020, // used for map coloring
        stateName: 'Rhode Island',
        blackPopulation: 0.058, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.610,
            'Black or African American': 1.020,
            'Hispanic or Latino': 0.770,
            'White': 0.600
        },
    },
    {
        'hc-key': 'us-me',
        value: 0.730, // used for map coloring
        stateName: 'Maine',
        blackPopulation: 0.017, // as fraction
        action: 'Application denied',
        fullData: {
            'Asian': 0.790,
            'Black or African American': 0.730,
            'Hispanic or Latino': 0.510,
            'White': 0.480
        },
    },


];

  onMount(() => {
    Highcharts.mapChart(chartContainer, {
      chart: {
        map: mapDataUS,
      },
      title: {
        text: 'Statewide Loan Decisions by Race or Ethnicity in 2023',
      },
      subtitle: {
        text: 'Source map: <a href="https://blackwealthdata.org/explore/homeownership">Black Wealth Data Center</a>',
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom',
        },
      },
      colorAxis: {
        min: 0.250,
        labels: {
            format: '{value:.2f}'
        }
        
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom'
    },
      series: [
            {
                data: data,
                keys: ['hc-key', 'value', 'fullData'],
                joinBy: 'hc-key',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                },
               tooltip: {
                headerFormat: '', // ADD THIS to remove "series 1" title
                useHTML: true,
                pointFormatter: function() {
                    const fullData = this.options.fullData || {};
                    const stateName = this.options.stateName || this.name;
                    const blackPopulation = this.options.blackPopulation ?? 'N/A';
                    const action = this.options.action || 'N/A';

                    return `
                    <div style="font-size: 13px">
                        <b>State Name:</b> ${stateName}<br>
                        <b>Black Population Percentage by State:</b> ${typeof blackPopulation === 'number' ? (blackPopulation*100).toFixed(1) + '%' : blackPopulation}<br><br>
                        <b>Action Taken:</b> ${action}<br><br>
                        <b>Total Actions Taken per 100 People by Race or Ethnicity</b><br>
                        <span style="display: flex; justify-content: space-between; width: 220px;">
                        <span>Asian</span>
                        <span style="color: #6b8e23;">${fullData['Asian'] ?? 'N/A'}</span>
                        </span>
                        <br>
                        <span style="display: flex; justify-content: space-between; width: 220px;">
                        <span>Black or African American</span>
                        <span style="color: #daa520;">${fullData['Black or African American'] ?? 'N/A'}</span>
                        </span>
                        <br>
                        <span style="display: flex; justify-content: space-between; width: 220px;">
                        <span>Hispanic or Latino</span>
                        <span style="color: #8b0000;">${fullData['Hispanic or Latino'] ?? 'N/A'}</span>
                        </span>
                        <br>
                        <span style="display: flex; justify-content: space-between; width: 220px;">
                        <span>White</span>
                        <span style="color: #8b0000;">${fullData['White'] ?? 'N/A'}</span>
                        </span>
                    </div>
                    `;
                    },
                },

            },
        ],
    });
  });

  let title ="Let's take a look at statewide loans decisions in 2023";
</script>
   
<div>
   
    <ScrollerColumn {title} layout="left">
         
        {#snippet sticky()}
            <div class="chart">
                <div bind:this={chartContainer} class="map"></div>
            </div>
    
        {/snippet}

        {#snippet scrolly()}
            <ArticleText>
                Let's take a look at the map depicting the top 25% of geographies with the highest Black population percentage by state.

            </ArticleText>

            <ArticleText>
                As you hover over the states,
                it gives a clearer idea of how many loan denials occur per 100 people of a racial group. 
            </ArticleText>

            <ArticleText>
                It is notable that the population-based rate of loan denials per 100 Black or African American people is almost always higher.
            </ArticleText>

            <ArticleText>
                When you fully explore this <a target="_blank"href="https://blackwealthdata.org/explore/homeownership">map</a> 
                provided by the BWDC, you will notice that regardless of the Black population percentage by state, 
                the population-based rate of loan denials per 100 people tends to be on the higher end.
            </ArticleText>

            <ArticleText>
                Let's take Louisiana as an example with a value of 0.76 loan denials per 100 Black/African Americans. This is
                significantly greater than the rates of other racial groups.
            </ArticleText>
        {/snippet}
    </ScrollerColumn>
</div>

<style>
    .chart {
        width: 90%;
        margin: 0px auto;
        width: 90%;
        margin: 0 auto;
        border: 2px solid black;
        border-radius: 4px; 
        box-sizing: border-box;
    }


 

</style>
