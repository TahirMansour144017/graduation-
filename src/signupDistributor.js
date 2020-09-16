import React , {Component} from 'react'
import axios from 'axios'
import { Form, Container , Button} from 'react-bootstrap'

class SignupDistributor extends Component{
    constructor(){
        super()
        this.state = {
            username : "",
            phoneNumber : '',
            location : "",
            password : "",
            placeName : "",
            email : "",
            alneel : "" ,
            sondos : "" ,
            aman : "" ,
            agip : "" ,
            abarsy : "" 
    }

    this.handlechange=this.handlechange.bind(this)
    this.onsubmit=this.onsubmit.bind(this)
}


handlechange(event){
    const {name , value} = event.target
    this.setState (
       { [name] : value}
    )
    
}

onsubmit(event){
    event.preventDefault()
    
    const client = {
        username : this.state.username ,
        phoneNumber : this.state.phoneNumber,
        location : this.state.location,
        placeName : this.state.placeName,
        password : this.state.password,
        email : this.state.email,
        Alneel : this.state.alneel,
        Sondos : this.state.sondos,
        Aman : this.state.aman,
        Abarsy : this.state.abarsy,
        Agip : this.state.agip
    }
    axios.post("http://localhost:5000/distributor/add" , client)
    .then(res => console.log(res.data))
    
        
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
            placeholder="0912300000" 
            name = "phoneNumber"
            onChange = {this.handlechange}
            />
            <Form.Text className="text-muted">
            make sure you enter your phonenumber
            </Form.Text>
            </Form.Group>
                        < Form.Group controlId="formBasictext">
                        <Form.Label>Alneel Cylinder</Form.Label>
                        <Form.Control
                        type="Number"
                        placeholder="amount" 
                        name = "alneel"
                        onChange = {this.handlechange}
                        />
                        </Form.Group>
            < Form.Group controlId="formBasictext">
            <Form.Label>Aman Cylinder</Form.Label>
            <Form.Control
            type="number"
            placeholder="amount" 
            name = "aman"
            onChange = {this.handlechange}
            />
            </Form.Group>
                        < Form.Group controlId="formBasictext">
                        <Form.Label>Agip Cylinder</Form.Label>
                        <Form.Control
                        type="number"
                        placeholder="amount" 
                        name = "agip"
                        onChange = {this.handlechange}
                        />
                        </Form.Group>
            < Form.Group controlId="formBasictext">
            <Form.Label>Abarsy Cylinder</Form.Label>
            <Form.Control
            type="number"
            placeholder="amount" 
            name = "abarsy"
            onChange = {this.handlechange}
            />
            </Form.Group>
                                < Form.Group controlId="formBasictext">
                                <Form.Label>Sondos Cylinder</Form.Label>
                                <Form.Control
                                type="number"
                                placeholder="amount" 
                                name = "sondos"
                                onChange = {this.handlechange}
                                />
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

                    < Form.Group controlId="formBasictext">
                     <Form.Label>Store's Name</Form.Label>
                     <Form.Control
                     type="text"
                     placeholder="enter Store's Name" 
                     name = "placeName"
                     onChange = {this.handlechange}
                     />
                     <Form.Text className="text-muted">
                     make sure you enter your Store's Name
                     </Form.Text>
                     </Form.Group>


      <Button variant="primary" type="submit"> Submit </Button>

 </Form>
 </Container>
 </div>

    )
}
}

export default SignupDistributor ;