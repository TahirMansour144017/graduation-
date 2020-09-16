import React , {Component} from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom" 
import Navbar from './components/Navbar'
import Customers from './components/Customers'
import AddCustomers from './components/AddCustomers'
import Distributors from './components/Distributors'
import AddDistributors from './components/AddDistributors'

function App () {
   return(
     <Router>
       <Navbar />
    <Route path = "/"                  Component = {Customers}        />
    <Route path = "/addcustomer"       Component = {AddCustomers}      />
    <Route path = "/distributors"      Component = {Distributors}     />
    <Route path = "/adddistributors"   Component = {AddDistributors}  />
    </Router>
   )
}

export default App;