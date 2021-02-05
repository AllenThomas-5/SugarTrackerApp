import React, { Component } from 'react'
import { db } from "./modules/firebase";
import Header from './layout/Header'
import Footer from  './layout/Footer'
import SugarTable from './tablelayout/SugarTable'


export class SugarMain extends Component {

    constructor(props) {
        super(props);
        this.state = {sugarData:[]};
      }
    
    componentDidMount(){
        
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
                console.log(doc.id, " => ", doc.data()); // array of cities objects 

            });
            console.log(sugarDataArr)
            //Set State of Sugar Data
            this.setState({sugarData:sugarDataArr})
        })
        .catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render() {
        
        return (
            <>
            <Header 
                 title={'Table of Your Sugar Levels'} 
                 subtitle={'You can add or change your sugar levels here'}
            />
                <SugarTable sugarData={this.state.sugarData} />
            <Footer />
            </>
        )
    }
}

export default SugarMain
