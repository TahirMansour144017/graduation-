import React , {Component} from'react'
import {Card , Button , Container , Row , Col} from 'react-bootstrap'
import aman from './images/aman.png'

class CardComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : ""
        }
    }
    render(){
        return(
       
                     <Card style={{ width: '18rem' , height: '32rem' }}>
                     <Card.Img variant="top" src={this.props.image} style={{ width: '18rem' , height: '18rem' }} />
                     <Card.Body>
                     <Card.Title> {this.props.title}</Card.Title>
                     <Card.Text>
                    {this.props.text}
                     </Card.Text>
                     <input type = "number" placeholder = "add the number" name = {this.props.name} onChange= {this.props.onchange} />
                     < br/>
                     <br/>
                     <Button variant="primary" onClick = {this.props.onclick} >Order</Button>
                     </Card.Body>
                     </Card>
                
)}
}


export default CardComponent;