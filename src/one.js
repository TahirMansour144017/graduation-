import React , {Component} from 'react'

class One extends Component {
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
    render(){
        return(
            <div>
            <h1>please select the type of account you want</h1>
            <label>Customer Account</label>
            <input
            type = "radio"
            name = "start"
            value = "customer"
            onChange = {this.handlechange} />
            <label>Distributor account</label>
            <input
            type = "radio"
            name = "start"
            value = "distributor"
            onChange = {this.handlechange} />
        </div>
        )
    }
}

export default One ;