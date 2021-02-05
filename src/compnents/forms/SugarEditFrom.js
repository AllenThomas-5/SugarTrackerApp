import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { db } from "../modules/firebase";

import Header from '../layout/Header'
import Footer from  '../layout/Footer'

export class SugarEditFrom extends Component {

    constructor(props){
        super(props)
        this.state = {
            sugar_id:"",
            sugar_date:"",
            sugar_fbps:"",
            sugar_ppbs:"",
            is_submit:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)

    }

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
    

    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    //Fuction to call on the Updation after click
    handleUpdate =(event)=>{
        event.preventDefault();
            this.setState({is_submit:true}, ()=>{
                this.editUser()
                 alert('Updated') 
            })

    }
    
    //Function to Update Data
    editUser =()=>{
        const {sugar_id,sugar_date,sugar_fbps,sugar_ppbs} = this.state
        const sugarData_db = db.collection('users').doc('0y01eXS9Kjm5E6fzEncn').collection('sugarData')

        sugarData_db.doc(sugar_id).update({
            date:sugar_date,
            fbps:sugar_fbps,
            ppbs:sugar_ppbs,
        })
        .then(function() {
            console.log("Document successfully updated!");
        });

    }


    render() {
        const {sugar_date,sugar_fbps,sugar_ppbs} = this.state
        return (
            <>
                <Header />
                <section>
                        <div className="container">
                        <h2 className="mt-4 text-primary">Change The Sugar Level Details</h2>
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
                                    <form id="addsugar_form" onSubmit={this.handleUpdate}>
                                        <div className="form-row align-items-center">
                                            <div className="col-2">
                                                <input 
                                                    type="date" 
                                                    className="form-control mb-2" 
                                                    id="month" 
                                                    name="sugar_date" 
                                                    placeholder="Enter Date"
                                                    value={sugar_date}
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
                                                    value={sugar_fbps}
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
                                                    value={sugar_ppbs}
                                                   onChange={this.handleChange} />
                                                    
                                            </div>
                                            <div className="col-2">
                                                <button 
                                                    id="chrtDatabtn" 
                                                    type="submit" 
                                                    className="btn btn-primary mb-2">Update</button>
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

export default SugarEditFrom
