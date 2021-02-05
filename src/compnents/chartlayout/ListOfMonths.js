import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ListOfMonths extends Component {
    monthlinks =()=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let links = months.map((month)=>{
            return(
                <Link key={month} to={{pathname:"/singlemonth", state:{monthName:month}}} className="list-group-item">{month}</Link>
            )
        })
        return links
    }
    render() {
        const monthslists = this.monthlinks()
        console.log(monthslists)
        return (
            <>
                {monthslists}
            </>
        )
    }
}

export default ListOfMonths
