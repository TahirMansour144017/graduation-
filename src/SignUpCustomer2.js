import React , {Component} from 'react'
import { Form , Container , Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

class SignUpCustomer extends Component{
        constructor(props){
            super(props)
            this.state = {
                username : "" ,
                password : "" , 
                location : "" ,
                phoneNumber : "" ,
                email : ""
            }
            this.handlechange=this.handlechange.bind(this)
            this.onsubmit=this.onsubmit.bind(this)
        }
    
        handlechange(event){
            const {name , value} = event.target
            this.setState({
                [name] : value
            })
           
        }
    
        onsubmit(event){
            event.preventDefault()
            const client = {
                username : this.state.username,
                password : this.state.password,
                location : this.state.location,
                phoneNumber : this.state.phoneNumber,
                email : this.state.email
            }
            axios.post("http://localhost:5000/customer/add" , client)
            .then(res => console.log(res))
        }
    render(){
        return(
           <div style = {{backgroundColor : "#A3AFBA" , flex : 1}}>
                <h1 style = {{
                    textAlign : "center" ,
                     paddingTop : 10,
                      fontStyle :"oblique",
                       fontWeight:"bolder",
                       color : "#0F202F"
                        }}>Hello, and welcome to Gasna</h1>
                <Container style ={{padding : 100}}>
                  <h2>Please fill all the fields</h2>
                  <br/>
               <Form onSubmit = {this.onsubmit}>
               <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control 
               type="email" 
               placeholder="Enter email"
               name= "email"
               onChange = {this.handlechange} />
               <Form.Text className="text-muted">
               make sure you enter your email
                </Form.Text>
               </Form.Group>
              < Form.Group controlId="formBasictext">
              <Form.Label>Username</Form.Label>
              <Form.Control
               type="text"
               placeholder="enter Username" 
               name = "username"
               onChange = {this.handlechange}
               />
               <Form.Text className="text-muted">
               make sure you enter your username
                </Form.Text>
              </Form.Group>
              < Form.Group controlId="formBasictext">
              <Form.Label>phone number</Form.Label>
              <Form.Control
               type="text"
                placeholder="0912345678" 
                name = "phoneNumber"
                onChange = {this.handlechange}
                />
                <Form.Text className="text-muted">
               make sure you enter your phonenumber
                </Form.Text>
              </Form.Group>
              < Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
               type="password"
               placeholder="Password" 
               name = "password"
               onChange = {this.handlechange}
               />
               <Form.Text className="text-muted">
               make sure you enter your password correctly
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Your location</Form.Label>
                  <Form.Control 
                  as="select"
                  placeholder = "--select location--"
                  onChange = {this.handlechange}
                  name = "location"
                  >
                  <option>Tayif</option>
                  <option>Riyadh</option>
                  <option>Manshia</option>
                  <option>Arkweet</option>
                  <option>Amarat</option>
    </Form.Control>
    <Form.Text className="text-muted">
               please select your location
                </Form.Text>
  </Form.Group>
              <Button variant="primary" type="submit">
                Submit
             </Button>
               </Form>
               </Container>
           </div>
        )
    }
}

export default SignUpCustomer;