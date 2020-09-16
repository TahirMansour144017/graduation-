import React, { Component } from "react"
import axios from "axios"

class SignUpCustomer extends Component {
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
            <div style = {{textAlign : "center"}}>
                <form onSubmit = {this.onsubmit}>
                    
                <h1>Please sign Up</h1>
                <label>Username</label>
                <br/>
                <input 
                type = "text"
                name = "username"
                placeholder = "enter username"
                onChange = {this.handlechange}
                />
                <br/>
                <br/>
                <label>password</label>
                <br/>
                <input 
                type = "password"
                name = "password"
                placeholder = "enter password"
                onChange = {this.handlechange}
                />
                <br/>
                <br/>
                <label>location</label>
                <br/>
                <input 
                type = "text"
                name = "location"
                placeholder = "enter location"
                onChange = {this.handlechange}
                />
                <br/>
                <br/>
                <label>phone number</label>
                <br/>
                <input 
                type = "text"
                name = "phoneNumber"
                placeholder = "enter phone number"
                onChange = {this.handlechange}
                />
                <br/>
                <br/>
                <label>Email</label>
                <br/>
                <input 
                type = "text"
                name = "email"
                placeholder = "enter phone number"
                onChange = {this.handlechange}
                />
                <br/>
                <br/>
                <input
                type = "submit"
                value = "submit"
                />
                </form>
            </div>
        )
    }
}


export default SignUpCustomer;