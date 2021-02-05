export class MonthDataGenerator {

    constructor(sugarData){
        this.sugarData = sugarData
    }

    displayMonthData() {
        let monthWiseData = this.getMonthData(this.sugarData)
        return monthWiseData;
        
    }

    
  //Function to return Monthwise Data
    getMonthData(sugarData){
            let monthData = [];
            // Loop through the months
            for(let i=0; i<=11;i++){
            let montItem = sugarData.filter(dataItem => this.filterSugarDate(dataItem.date,i))

            if ( montItem.length !== 0 ) {
                let monthDataItem = this.getMonthObjectData(i,montItem)
                monthData.push(monthDataItem)
            }

        }
        return monthData;
 }

    
 // Function to return right month for Javscript Filter array method
    filterSugarDate(theSugarDate,theSugarMonth){
            let sugarDate = new Date(theSugarDate)
            let sugarMonth = sugarDate.getMonth()
        // console.log(sugarMonth);
        
        return  sugarMonth === theSugarMonth ? true : false;
 }

 // Create Month Name and Data Object 
  getMonthObjectData(monthKey, MonthItem){
        return {
            monthName : this.getMonthName(monthKey),
            monthData : MonthItem
        }
     }

    //Function to return Month Name
    getMonthName(sugarDataDateNumber){
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames[sugarDataDateNumber]
    }
 
}
