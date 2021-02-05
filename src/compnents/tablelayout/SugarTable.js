import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//import { db } from "../modules/firebase";





export class SugarTable extends Component {

    // Rendering the table data
    renderTable = (data)=>{
        //console.log('The data in Render Table fn',data)
        return(
            <tr key={data.id}>
                <td>*</td>
                <td>{data.date}</td>
                <td>{data.fbps}</td>
                <td>{data.ppbs}</td>
                {/*Links with state values that are being passed to the Router,*/}
                <td><Link className="btn btn-info btn-sm"  role="button" to={{pathname:"/editsugar", state:{sugarData:data}}}>Edit </Link></td>
                <td><Link className="btn btn-danger btn-sm"  role="button" to={{pathname:"/deletesugar", state:{sugarData:data}}}>Delete </Link></td>
            </tr>
        )
    }

    render() {
        return (
            <section>
            <div className="container">
                <h2 className="mt-4 text-primary">Sugar Data Table</h2>
                    <hr/>
                    <div className="row mb-2">
                    <div className="col-lg-12">
                        <Link className="btn btn-primary"  role="button" to="/addnewsugar">Add New </Link>
                    </div>
                    </div>

                        <div className="row">
                            <div className="col-lg-10">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Fbps</th>
                                        <th scope="col">Ppbs</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>

                                    </tr>
                                    </thead>
                                    <tbody id="sugartable_body">
                                        <tr data-id="6o2D0mD67hjWbUWUZJYU">
                                            <td>1</td><td>2020-01-04</td>
                                            <td>75</td><td>125</td>
                                            <td><button type="button" className="btn btn-info btn-sm">Edit</button></td>
                                            <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                                        </tr>
                                        <tr data-id="6o2D0mD67hjWbUWUZJYU">
                                            <td>1</td><td>2020-01-04</td>
                                            <td>75</td><td>125</td>
                                            <td><button type="button" className="btn btn-info btn-sm">Edit</button></td>
                                            <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                                        </tr>
                                        {this.props.sugarData.map(this.renderTable)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </section>
        )
    }
}

export default SugarTable
