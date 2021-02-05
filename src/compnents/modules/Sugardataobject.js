export class Sugardataobject{
    constructor(monthWiseData){
        this.monthWiseData = monthWiseData
    }



    displaygraphData(){

       let sugarGraphData = this.monthWiseData.map(
            monthSugarData => this.sugarGraphMaker(monthSugarData.monthName, monthSugarData.monthData ) 
            )
         //console.log(sugarGraphData);

        return{
            sugarGraphData
        }
    }

    sugarGraphMaker(monthName, monthData){
        let sugarMonth = monthName;
        let fbsData = this.fbsDataMaker(monthData);
        let ppbsData = this.ppbsDataMaker(monthData);
        let normalLevels = this.normalDataLevel(monthName)
        return{
            sugarMonth : sugarMonth,
            fbsData : fbsData,
            ppbsData : ppbsData,
            normalLevels:normalLevels
        }

    }

// Function To create Fbs Object
    fbsDataMaker(sugarMonthData){
        let fbsArray =[];
        sugarMonthData.forEach(sugarItem => {
                 const {date,fbps} = sugarItem
                 fbsArray.push(this.getCordinates(date,fbps))
           });
     
           //console.log(ppbpsArray)
           return fbsArray
    }

    // Function To create Fbs Object
    ppbsDataMaker(sugarMonthData){
        let ppbpsArray =[];
        sugarMonthData.forEach(sugarItem => {
                 const {date,ppbs} = sugarItem
                 ppbpsArray.push(this.getCordinates(date,ppbs))
           });
     
           //console.log(ppbpsArray)
           return ppbpsArray

    }

    //Function to create Monthwise normal FBS and PPBS Sugar Level
    normalDataLevel(monthName){
        let normalSugarLevel={}
        switch (monthName){
            case "January" :
                normalSugarLevel = this.getNormalCordinates('01')
                break;
            case "February" :
                normalSugarLevel = this.getNormalCordinates('02')
                break;
            case "March" :
                normalSugarLevel = this.getNormalCordinates('03')
                break;
            case "April" :
                normalSugarLevel = this.getNormalCordinates('04')
                break;
            case "May" :
                normalSugarLevel = this.getNormalCordinates('05')
                break;
            case "June" :
                normalSugarLevel = this.getNormalCordinates('06')
                break;
            case "July" :
                normalSugarLevel = this.getNormalCordinates('07')
                break;
            case "August" :
                normalSugarLevel = this.getNormalCordinates('08')
                break;
            case "September" :
                normalSugarLevel = this.getNormalCordinates('09')
                break;
            case "October" :
                normalSugarLevel = this.getNormalCordinates('10')
                break;
            case "November" :
                normalSugarLevel = this.getNormalCordinates('11')
                break;
            case "December" :
                normalSugarLevel = this.getNormalCordinates('12')
                break;
             default:
                normalSugarLevel = this.getNormalCordinates('01');
        }

        return normalSugarLevel

    }

    // Get Normal Cordinates 
        getNormalCordinates(monthVal){
            return {
                fbsNormal:[
                    {x:new Date('2020-'+ monthVal +'-02'),y:110},
                    {x:new Date('2020-'+ monthVal +'-31'),y:110},
        
                ],
                ppbsNormal:[
                    {x:new Date('2020-'+ monthVal +'-02'),y:140},
                    {x:new Date('2020-'+ monthVal +'-31'),y:140},
        
                ]
            }
           
        }

    // Get cordinates function
            getCordinates(dateValue, sugarValue){
                return {x:new Date(dateValue), y:sugarValue}
            }

}
