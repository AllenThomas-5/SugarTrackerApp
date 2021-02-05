import React, { Component, Fragment } from 'react'
import {Sugargraphdatamodeler} from '../modules/Sugargraphdatamodeler'
//import the desired component from the Chart.js library
import {Line} from "react-chartjs-2" 

export class SugarLineGraph extends Component {

    getSugarGraphData = (sugardataItemProp) =>{
        let sgData = new Sugargraphdatamodeler(sugardataItemProp)
        return sgData.displaySugarGraphData()
    }
    
    render() {
        let sugarGraphDataobj = this.getSugarGraphData(this.props.sugardataItem)
        return (
            <Fragment>
                <div className="mb-4 mr-2" >
                    <div className="card">
                        <div className="card-header">
                            {this.props.sugardataItem.sugarMonth}
                        </div>
                        <div className="card-body">
                            <Line data={sugarGraphDataobj.sugarLineData} options={sugarGraphDataobj.sugarLineOptions} />
                        </div>
                    </div>
                </div>
        </Fragment>
        )
    }
}

export default SugarLineGraph
