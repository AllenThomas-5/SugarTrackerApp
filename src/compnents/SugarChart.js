import React,{Component} from 'react'
import '../compnentcss/Allchart.css'
import { db } from "./modules/firebase"
import {MonthDataGenerator} from "./modules/Monthdatagenerator"
import {Sugardataobject} from './modules/Sugardataobject'
import {SugarLineGraph} from './chartlayout/SugarLineGraph'

import Header from './layout/Header'
import Footer from  './layout/Footer'



export class SugarChart extends Component {

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



    componentDidMount(){
        // Get the Sugar Level details on Component Mount

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
        // Render the Chart Component by looping through the Graph Array
        console.log(this.state.sugarGraphData)
        let sugarItems=[]
        const {sugarGraphData} = this.state
        if (sugarGraphData != null) {
            sugarItems = sugarGraphData.map((sugarGraphItem)=>{
                return <div className="col-lg-12" ><SugarLineGraph key={sugarGraphItem.sugarMonth} sugardataItem = {sugarGraphItem}/> </div>
            })
        }
        return (
            <>
            <Header
                title={'Sugar Levels Shown in Chart'}
                subtitle={'Your sugar levels for all year is shown here'}
            />
                <div className="light-bg">
                     <section>
                        <div className="container mb-5">
                            <div className="row">
                                {sugarItems}
                            </div >
                        </div>
                     </section> 
                </div>
            <Footer/> 
         </>
        )
    }
}

export default SugarChart

