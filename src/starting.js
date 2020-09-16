import React , {Component} from 'react'
import SignUpCustomer from "./SignUpCustomer2"
import SignupDistributor from "./signupDistributor"

import {Container , Col , Row} from 'react-bootstrap'

class Starting extends Component {
constructor(){
    super()
    this.state = {
        start : ""
    }
    this.handlechange=this.handlechange.bind(this)

}
handlechange(event){
    const{ name , value} = event.target
    this.setState({
        [name] : value
    })
}
componentDidMount(){
    this.setState({
        start : "false"
    })
}


render(){ 
    if(this.state.start === "customer"){
        return(
            <div>
                <SignUpCustomer/>
            </div>
        )
    }if(this.state.start === "distributor"){
        return(
            <div>
                <SignupDistributor/>
            </div>
        )
    }else{
        return(
            <div style = {{margin : 0 , backgroundColor :'#A3AFBA'}}>
                <Container style = {{padding : 80 , backgroundColor :'#A3AFBA'}} fluid = "xl">
            <h1 >please select the type of account you want</h1>
            <Row style = {{paddingTop : 80}}>
                <Col>
            
            <input
            type = "radio"
            name = "start"
            value = "customer"
            onChange = {this.handlechange} />
            <label>Customer Account</label>
            </Col>
            <Col>
            
            <input
            
            type = "radio"
            name = "start"
            value = "distributor"
            onChange = {this.handlechange} />
            <label>Distributor account</label>
            </Col>
            </Row>
            </Container>
        </div>
        )
    }
   
    
    
    
}

}

export default Starting ;