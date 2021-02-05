import React, { Component } from 'react'
import Header from './layout/Header'
import Footer from  './layout/Footer'
import {ListOfMonths} from '../compnents/chartlayout/ListOfMonths'



export class SugarMonthList extends Component {

    render() {
        
        return (
            <>
            <Header 
                 title={'Your Sugar Levels on Various Months'} 
                 subtitle={'Check your sugarlevels for various months'}
            />

                <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card" >
                            <div class="card-body">
                                <h2 class="card-title">Year 2020</h2>
                                <section>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="list-group list-group-flush">
                                                <ListOfMonths />
                                            </div>  
                                        </div>
                                    </div>
                                </section>
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

export default SugarMonthList
