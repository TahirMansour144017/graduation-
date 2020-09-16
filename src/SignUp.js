import React , {Component} from 'react'
import axios from 'axios'


class SignUp extends Component{

    constructor(props){
    super(props)
    this.state = {
        username : "",
        phoneNumber : '',
        location : "",
        radiogaga: "",
        password : "",
        placeName : "",
        email : ""

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
        email : this.state.email
    }
    axios.post("http://localhost:5000/distributor/add" , client)
    .then(res => console.log(res.data))
    
        
}

componentDidMount(){
    
}

render(){
    return(
       
        <div style = {{backgroundColor : "grey" , flex : 1}}>
            <form  onSubmit = {this.onsubmit} >
                <h1 style = {{textAlign : "center" , backgroundColor : "#5A656F", margin : 0 }}>Hello , Welcome to Gasna.</h1>
                <h2 style = {{paddingLeft : 10}}>Please sign up to use the web app</h2>
               
                <label>Username :</label>
                <br/>
                <input 
                type = "text"
                placeholder = "Enter username here"
                name = "username"
                onChange = {this.handlechange}
                />
                <hr/>
                <br/>
                <label>Phone Number :</label>
                <br/>
                <input 
                type = "text"
                placeholder = "Enter phonenumber "
                name = "phoneNumber"
                onChange = {this.handlechange}
                value = {this.state.phoneNumber}
                />
                <hr/>
                <br/>
                <label>Store's Name :</label>
                <br/>
                <input 
                type = "text"
                placeholder = "Enter the store's name"
                name = "placeName"
                onChange = {this.handlechange}
                value = {this.state.placeName}
                />
                <br/>
                <hr/>
                <br/>
                <label>password :</label>
                <br/>
                <input 
                type = "password"
                placeholder = "Enter the password"
                name = "password"
                onChange = {this.handlechange}
                value = {this.state.password}
                />
                <br/>
                <hr/>
                <br/>
                <label>email :</label>
                <br/>
                <input 
                type = "text"
                placeholder = "Enter the email"
                name = "email"
                onChange = {this.handlechange}
                value = {this.state.email}
                />
                <br/>
                <hr/>
                <label>Area :</label>
                <br/>
                <select  
                placeholder = "Selct your area "
                name = "location"
                onChange = {this.handlechange}
                value = {this.state.location}
                >
                    <option value = "Taif">Taif</option>
                    <option value = "Riadh">Riadh</option>
                    <option value = "manshia">Mansheeya</option>
                    <option value = "wd nubawi">Wd nubawi</option>
                    <option value = "thawra">Thawra</option>
                    <option value = "arkweet">Rkweet</option>
                    <option value = "Almaady city">Almaady city</option>
                </select>
                
                <hr/>
                <br/>
                <input
                style = {{marginLeft : 250}} 
                type = "submit"
                value = "submit"
               
                />
                
          
            </form>
        </div>
        
    )
}
}

export default SignUp;