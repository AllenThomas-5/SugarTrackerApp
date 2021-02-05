import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { db } from "../modules/firebase";

import Header from '../layout/Header'
import Footer from  '../layout/Footer'

export class SugarAddForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            sugar_date:"",
            sugar_fbps:"",
            sugar_ppbs:"",
            is_submit:false
        }
        //BInd the functions
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    // Function to Add the Data
    
    addData =()=>{
        const sugarData_db = db.collection('users').doc('0y01eXS9Kjm5E6fzEncn').collection('sugarData')

        const {sugar_date,sugar_fbps,sugar_ppbs} = this.state

        sugarData_db.add({
            date:sugar_date,
            fbps:sugar_fbps,
            ppbs:sugar_ppbs,
            // A time stamp to order the fields by
            created:new Date().getTime()
    
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
    
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    }




    // Handle the Form Data
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    // Handle Submit and Add the Data
    handleSubmit =(event)=>{
        event.preventDefault();
            this.setState({is_submit:true},()=>{
                this.addData()
            })
            alert('Data Added')
            this.setState({is_submit:false})
    }
    

    render() {
        return (
            <>
            <Header />
            <section>
                    <div className="container">
                    <h2 className="mt-4 text-primary">Add Your Sugar Levels</h2>
                    <hr/>
                    <div className="row  mx-auto mb-5">
                        <div className="col-lg-12 ">
                            {/* <!-- Card Body --> */}
                            <div className="card">
                                <div className="card-header">
                                Enter the Sugar Levels Here
                                </div>
                            <div className="card-body">
            
                                {/* <!-- Bootstrap Form --> */}
                                <form id="addsugar_form" onSubmit={this.handleSubmit}>
                                    <div className="form-row align-items-center">
                                        <div className="col-2">
                                            <input 
                                                type="date" 
                                                className="form-control mb-2" 
                                                id="month" 
                                                name="sugar_date" 
                                                placeholder="Enter Date"
                                                onChange={this.handleChange}
                                                
                                                />
                                        </div>
                                        <div className="col-4">
                                            <input 
                                                type="text" 
                                                className="form-control mb-2" 
                                                id="chrtvaue" 
                                                name="sugar_fbps" 
                                                placeholder="Enter Fasting Blood Sugar Level(FBS)" 
                                                onChange={this.handleChange}
                                                />
                                        </div>
                                        <div className="col-4">
                                            <input 
                                                type="text"
                                                className="form-control mb-2"
                                                id="PSvalue" 
                                                name="sugar_ppbs" 
                                                placeholder="Enter Postpandrial Blood Sugar Level(PPBS)"
                                                onChange={this.handleChange} />
                                                
                                        </div>
                                        <div className="col-2">
                                            <button 
                                                id="chrtDatabtn" 
                                                type="submit" 
                                                className="btn btn-primary mb-2">Submit</button>
                                        </div>
                                    </div>
                                </form>
            
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-lg-12">
                                <Link className="btn btn-primary"  role="button" to="/">View Table </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <p>The Fbps is: {this.state.sugar_fbps}</p>
                        <p>The Ppbs is: {this.state.sugar_ppbs}</p>
                        <p>The Date is: {this.state.sugar_date}</p>
                    </div>
                </section>
                <Footer />
            </>
    
        )
    }
}

export default SugarAddForm
