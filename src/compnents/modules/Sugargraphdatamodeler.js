
export class Sugargraphdatamodeler {

    constructor(sugarDataItem){
       // console.log('The property passed to SugarDataModeler consturctor',sugarDataItem)
        this.fbsData = sugarDataItem.fbsData
        this.ppbsData = sugarDataItem.ppbsData
        this.normalLevelData = sugarDataItem.normalLevels
    }

    displaySugarGraphData(){
        let sugarLineData = this.sugarGraphrender(this.fbsData,this.ppbsData,this.normalLevelData)
        let sugarLineOptions = this.getlineOptions()

        return{sugarLineData, sugarLineOptions}
    }

    // The Funtion to Get The Data for Line Chart Js
    sugarGraphrender =(fbsData,ppbsData,normalLevelData) =>{

      //  console.log('Data Within Graph Render',normalLevelData)
    
        const yellow = 'rgba(245, 127, 23 , 1)'
        const red = 'rgba(183, 28, 28,1)'
        
          const sugarlineData =  {
            datasets: [{
                label: 'Fasting Blood Sugar Level',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data:fbsData ,
                fill:false
            },
            {
                label: 'Post Pandrial Blood Sugar Level',
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)',
                data:ppbsData ,
                fill:false
            },
        
            {
                label: 'Normal Fasting Blood Sugar Level',
                backgroundColor: red,
                borderColor: red,
                borderWidth	:1,
                borderDash	:[10 , 10],
                data: normalLevelData.fbsNormal,
                fill:false
            },
            {
                label: 'Normal Postpandrial Blood Sugar Level',
                backgroundColor: yellow,
                borderColor: yellow,
                borderWidth	:1,
                borderDash	:[10 , 10],
                data: normalLevelData.ppbsNormal,
                fill:false
            }
        
            ]
        }
        
    
        return sugarlineData
    }

    // The Function to get the OPtions for the line chart
    getlineOptions=()=>{
        const lineOptions = {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'day',
                        round:true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 40,
                        suggestedMax: 200
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Sugar Levels'
                    }
                }]
            }
        }

        return lineOptions
    }
    

}