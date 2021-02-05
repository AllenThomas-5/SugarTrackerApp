import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { db } from "../modules/firebase";


import Header from '../layout/Header'
import Footer from  '../layout/Footer'

export class SugarDeleteForm extends Component {


    constructor(props){
        super(props)
        this.state = {
            sugar_id:"",
            sugar_date:"",
            sugar_fbps:"",
            sugar_ppbs:"",
            is_submit:false
        }
        this.deleteDetails = this.deleteDetails.bind(this)

    }

    // Set the state from the Props that was sent on Click
    componentDidMount(){
        const {sugarData} = this.props.location.state
        console.log(sugarData)
        // If the Sugar Data is not Null
        if (sugarData) {

            this.setState({
                sugar_id:sugarData.id,
                sugar_date:sugarData.date,
                sugar_fbps:sugarData.fbps,
                sugar_ppbs:sugarData.ppbs,
            })
        }
       
    }
  
    // Function to delete the sugar details
    deleteDetails= ()=>{
        const {sugar_id} = this.state
        const sugarData_db = db.collection('users').doc('0y01eXS9Kjm5E6fzEncn').collection('sugarData')
        
        sugarData_db.doc(sugar_id).delete().then(function() {
            alert("The details have been deleted")
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

    }



    render() {
        const {sugar_date,sugar_fbps,sugar_ppbs} = this.state

        return (
            <>
            <Header />
                 <section>
                    <div className="container">
                        <div className="row">
                            <h2 className="mb-4 text-primary">Remove Details</h2>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 ">
                                    <div className="card mb-3">
                                        <div className="card-header text-white bg-danger"><h5>Confirm to Remove the Details</h5></div>
                                        <div className="card-body">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><h5>Date:</h5> {sugar_date} </li>
                                                <li className="list-group-item"><h5>Fasting Blood Sugar:</h5>  {sugar_fbps} </li>
                                                <li className="list-group-item"><h5>Postpandrial Blood Sugar:</h5>  {sugar_ppbs}</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                        <button type ="button" className="btn btn-danger" onClick={this.deleteDetails} >Delete</button>
                                        <Link className="btn btn-primary ml-4"  role="button" to="/">View Table </Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
                        </div>
            </section>
           <Footer />

            </>
        )
    }
}

export default SugarDeleteForm
