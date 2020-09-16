import React , {Component} from 'react'
import axios from "axios"
import { Form , Container , Button ,Alert} from 'react-bootstrap'
import Starting from './starting'
import Profile from './profile'
import ProfileDis from './profileDis'

class StartPage extends Component{

    constructor(props){
    super(props)
   
    this.state = {
        email : '' ,
        password : '',
        login : false ,
        store : "" ,
        mood : true, 
        type : ''
                 }

    this.signinhandler = this.signinhandler.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
    this.forregister=this.forregister.bind(this)
     
}

// handling Register button
forregister(){
    this.setState({
        mood : false
    })
}

//handling singning in
signinhandler(event){
    const {name , value} = event.target
    this.setState({
        [name] : value
    })
}

// handling submit button
onsubmit(event){
    event.preventDefault()   
      
    if(!this.state.email || !this.state.password){
        return(
            alert('please fill in all the fields')
        )
    }
        const client = {
        email : this.state.email ,
        password : this.state.password
        }
        
        axios.post('http://localhost:5000/auth/add' , client)
            .then( (res) => {
              
            console.log('token : ' + res.data.token)
            console.log(res.data)
            console.log('type : ' + res.data.type)
            localStorage.setItem('logininfo' , JSON.stringify(  { token : res.data.token , type : res.data.type , user : res.data} ))
            this.setState({login :true , type : res.data.type})
                            } )
}


render(){
    if(this.state.mood && this.state.login === false){
    return(
        
        <div style = {{backgroundColor : "#A3AFBA" }}>
            <Container style ={{padding : 90 , paddingBottom:600}}>
                <h1 style = {{textAlign : "center"}}>hello and welcome</h1>
                     <Form onSubmit = {this.onsubmit}>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control 
                          type="email" 
                          placeholder="Enter email"
                          name= "email"
                           onChange = {this.signinhandler} />
                          <Form.Text className="text-muted">
                          make sure you enter your email
                          </Form.Text>
                          </Form.Group>
                                  < Form.Group controlId="formBasictext">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control
                                  type="password"
                                  placeholder="enter password" 
                                  name = "password"
                                   onChange = {this.signinhandler}
                                  />
                                  <Form.Text className="text-muted">
                                  make sure you enter your password
                                  </Form.Text>
                                  </Form.Group>
                                        <Button variant="primary" type="submit"> LOG IN</Button>
                      </Form>
            <br />
            <br />
            <br />
                    <h2>Please Register if you dont have an account</h2>
            <br/>
                                         <Button 
                                         variant="success" 
                                         size="lg" 
                                         block
                                         onClick = {this.forregister}>
                                         Register
                                         </Button>
                    <h1 style = {{textAlign : "center" , paddingTop:200 , fontStyle :"italic" , color : "#3433B0"}}>Thank you for using Gasna :)</h1>
            </Container>
        </div>
   
   )}if(this.state.mood && this.state.login ===true && this.state.type === true){
    return(
        <div>
            <ProfileDis/>
        </div>
    )
   }if(this.state.mood && this.state.login ===true && this.state.type === false){
    return(
        <div>
            <Profile/>
        </div>
    )
   }
   else{

    return(
            <div>
             <Starting/>
            </div>
        )
    }
}
}   

export default StartPage;