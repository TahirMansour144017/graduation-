import React , {Component} from "react"
import {Link} from "react-router-dom"

class Navbar extends Component {
   

    render(){
        return(
           <nav>
               <Link to = "/" >               Customers         </Link>
               <Link to = "/addcustomer">     Add Customer      </Link>
               <Link to = "/distributors">    Distributor       </Link>
               <Link to = "/adddistributor">  Add Distributor   </Link>
           </nav>
        )
    }
}

export default Navbar;