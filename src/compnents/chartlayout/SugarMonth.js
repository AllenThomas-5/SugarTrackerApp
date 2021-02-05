import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../layout/Header'
import Footer from  '../layout/Footer'
import { db } from "../modules/firebase"
import {MonthDataGenerator} from "../modules/Monthdatagenerator"
import {Sugardataobject} from '../modules/Sugardataobject'
import {SugarLineGraph} from './SugarLineGraph'

export class SugarMonth extends Component {
    
    // Set the Initial State of the Sugar Graph Data
    constructor(props) {
        super(props);
        this.state = {sugarGraphData:[]};
      }


    getsugarGraphData = (sugarData)=>{
        let monthWiseDataobj = new MonthDataGenerator(sugarData)
        let monthWiseData = monthWiseDataobj.displayMonthData()
        console.log('Contnet in getSugarGraphData Function',monthWiseData)
        const graphDataObj = new Sugardataobject(monthWiseData)
        const {sugarGraphData:graphData} = graphDataObj.displaygraphData() 
        console.log('The Graph Data',graphData)
        this.setState({sugarGraphData:graphData})
      }

      // Function to Filter the Data based on month
    getFilteredMonthData = (month='January') => {
        const sugarGraphData = this.state.sugarGraphData
        let monthData = sugarGraphData.filter(sugarData => sugarData.sugarMonth === month)
        return monthData
    }

    componentDidMount(){
            //Function to create a custom object with id and sugar level data
            const sugarObj = (docid, data) =>{
                let sid = {id:docid}
                let obj = Object.assign(sid,data)
                return obj
            }
        
        const sugarData_db = db.collection('users').doc('0y01eXS9Kjm5E6fzEncn').collection('sugarData')
        sugarData_db.orderBy('date')
        .get()
        .then((snapshot)=>{
            const sugarDataArr= []
            snapshot.forEach(doc => {
                sugarDataArr.push(sugarObj(doc.id, doc.data()))
            });
            this.getsugarGraphData(sugarDataArr)
        })
    }

    render() {
       const {monthName} = this.props.location.state
       const monthData = this.getFilteredMonthData(monthName)
        console.log('The Month Data',monthData[0])
        return (
           <>
            <Header 
                title={'Your Sugar Level for the Month'} 
                subtitle={'This page dispalys the sugar level for the current month'}
            />
                <div className="light-bg">
                     <section>
                        <div className="container mb-5">
                        <div className="row mb-2">
                                <div className="col-lg-6" >
                                <h1> The Sugar Data in {monthName}</h1>
                                 </div >
                                 <div className="col-lg-6" >
                                 <Link className="btn btn-info btn-lg float-right"  role="button" to="/month">Back to List of Months</Link>

                                 </div >
                            </div >
                            <div className="row mt-2">
                                <div className="col-lg-12" >
                                    {/* Check if Month Data Exists */}
                                    {monthData.length > 0? <SugarLineGraph sugardataItem = {monthData[0]}/> :' There is Not Data For This Month'}
                                    
                                 </div >
                            </div >

                        </div>
                     </section> 
                </div>
            <Footer/> 
           </>
        )
    }
}

export default SugarMonth
