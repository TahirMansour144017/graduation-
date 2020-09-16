import React , {Component} from'react'
import axios from 'axios'
import {Card , Button , Container , Row , Col} from 'react-bootstrap'
import aman from './images/aman.png'

class CardComponentDis extends Component {
    constructor(props){
        super(props)
        this.state = {
            manga : ""
        }
    }

    
    render(){
return(
   
                 <Card style={{ width: '18rem' , height: '35rem' }}>
                 <Card.Img variant="top" src={this.props.image} style={{ width: '18rem' , height: '18rem' }} />
                 <Card.Body>
                 <Card.Title> {this.props.title}</Card.Title>
                 <Card.Text>
                {this.props.text}  
                 </Card.Text>
                 <input type = "Number" placeholder = "add the number"  name = {this.props.name} onChange= {this.props.onchange} />
                 <Button variant="primary" onClick = {this.props.onclick} >ADD</Button>
                 <br/>
                 <br/>
                 <input type = "Number" placeholder = "add the number"   name = {this.props.name} onChange= {this.props.onchange} />
                 <Button variant="success" onClick = {this.props.onclick2} >SUB</Button>
                 </Card.Body>
                 </Card>
            

)
    }
}


export default CardComponentDis;