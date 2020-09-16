import React , {Component} from 'react'
import {Navbar , Nav , NavDropdown , Form , FormControl, Button , Container , Row , Col} from 'react-bootstrap'
import CardComponent from './cards'
import aman from './images/aman.png'
import gadra from './images/gadra.png'
import neel from './images/neel.png'
import sondos from './images/sondos.png'
import axios from 'axios'
import SignUpCustomer from './SignUpCustomer2'


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            begin : false,
            store : [],
            change : true,
            email : "",
            title : "",
            complete : "",
            Aman : "",
            Sondos : "",
            Agip : "",
            Abersy : "" ,
            Alneel : "",
            talab: {
                name : "",
                amount : '',
                customer : "",
                data : ""
            },
            ordersent : 'false',
            orderpending : false,
            latest : ""
        }
       
        this.handler=this.handler.bind(this)
        this.buttonorder=this.buttonorder.bind(this)
        this.changehandler=this.changehandler.bind(this)
        this.onrecieve=this.onrecieve.bind(this)
    }


    buttonorder(pass){
        // for knowing which user was pressed the email parameter is passed from the Onclick down there and it is made with
        // an arrow function as to not be called unless it is pressed
        console.log(pass) 
        const goal =pass
        const client = {
             email : goal.pass , 
             myorders : this.state.talab
        }
        //for the authorization
        axios.post("http://localhost:5000/distributor/myorder" , client )
        .then( res => {
            console.log(res.data)
            this.setState({
                orderpending :true,
                latest : goal.pass
            })
        })
    }
    changehandler(e){
        const {name,value} = e.target
        this.setState({
            [name] : value 
        })
        console.log(this.state)
    }
    onrecieve(){


        /*const client = {
            email : this.state.latest , 
            myorders : this.state.talab
       }
        
         axios.post("http://localhost:5000/distributor/middle" , client )
         .then(
             res => {
                 console.log(res)
             }
         )*/
        

    }
    handler(pass){
        const middle = pass
        
        console.log(pass)
                const local = localStorage.getItem('userinfo')
                const localinfo = JSON.parse(local)
                return(
                    axios.get("http://localhost:5000/distributor" )
                    .then(result => { 
                        this.setState(
                        {store : result.data}
                    )
                    // here we want to pass the talab for the order field
                    if(pass === "Aman"){
                        return(
                    this.setState({
                        change : false,
                        begin :false,
                        talab :{ name : pass ,amount : this.state.Aman , customer : localinfo.data.username , date : Date},
                        
                    })
                        )}if(pass === "Alneel"){
                            return(
                        this.setState({
                            change : false,
                            begin :false,
                            talab :{ name : pass ,amount : this.state.Alneel , customer : localinfo.data.username , date : Date},
                            
                        })
                            )}if(pass === "Sondos"){
                                return(
                            this.setState({
                                change : false,
                                begin :false,
                                talab :{ name : pass ,amount : this.state.Sondos , customer : localinfo.data.username , date : Date},
                                
                            })
                                )}
                    console.log( this.state.talab)
                    }
                    //here it should find the distributor that has the same location as the customer
                    // the next step is to render the distributors with the same location on  the screen
                    // then the user should click the distributor that he wants
                    //and then an order should be sent from this user to the required distributor
                    // nad the order must be saved somewhere
                    // i thought of using a mapping function or the filter function to render them but i didnt know how
                  )
             ) }
    componentDidMount(){
        const token = localStorage.getItem('logininfo' )
        const dest = JSON.parse(token)
        const head = {
           "authorize" : dest.token
        }
        
        console.log(dest)
        console.log(head)
        axios.get('http://localhost:5000/auth/users' , {headers : head})
        .then(res => {
            console.log(res.data )
            localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
            this.setState({ 
                begin : true ,
                
            })
           
        })
        
    }

    render(){
        const cred = localStorage.getItem('userinfo')
        const cred2 = JSON.parse(cred) 
        ///////////
        if(this.state.begin === false && this.state.change=== true){
            return(
                <div>
                    <h1>Loading....</h1>
                </div>
            )
        }if(this.state.begin === true ){
        return(
            <div  style = {{  backgroundColor : "#A3AFBA" }}>
                                    <Navbar bg="dark" expand="xl" variant = "dark" >
                                    <Navbar.Brand href='SignUpCustomer'>log Out</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    </Nav>
                                    </Navbar.Collapse>
                                    </Navbar>

            <Container style = {{padding :50 , backgroundColor : "#A3AFBA" }}>
                <h1 style = {{paddingBottom : 50}}>hello {cred2.data.username} , welcome back</h1>
                   <Row>
                        <Col>
                            <CardComponent 
                            image = {aman}
                            title = "Aman"
                            name = "Aman"
                            text = "Aman is Considered Top on the Market"
                            onclick = {()=> this.handler("Aman")}
                            onchange = {this.changehandler}
                            />
                        </Col>
                        <Col>
                            <CardComponent 
                            image = {neel}
                            title = "Alneel"
                            name = "Alneel"
                            text = "neel is Considered Top on the Market"
                            onclick = {()=> this.handler("Alneel")}
                            onchange = {this.changehandler}
                            />
                        </Col>
                   </Row>
                <br/>
                <br/>
                <br/>
                   <Row>
                        <Col>
                            <CardComponent 
                            image = {gadra}
                            title = "Abersy"
                            name = "Abersy"
                            text = "gadra is Considered Top on the Market"
                            onclick = {()=> this.handler("Abersy")}
                            onchange = {this.changehandler}
                            />
                        </Col>
                        <Col>
                            <CardComponent 
                            image = {sondos}
                            title = "Sondos"
                            name = "Sondos"
                            text = "sondos is Considered Top on the Market"
                            onclick = {()=> this.handler("Sondos")}
                            onchange = {this.changehandler}
                            />
                        </Col>
                    </Row>
           
            </Container>
           </div>
        )}if(this.state.change === false && this.state.orderpending === false){
            const chair = this.state.store
            const filtering = this.state.talab.name
            const couch = chair.map( user => {
                return(
                <li key = {user.email}>  <h1>location {user.location}</h1>
                       <br/>
                        <Button variant = "primary" 
                        onClick = {()=>this.buttonorder({pass : user.email})} >
                           {user.username}
                        </Button>
                        <hr/>
                    </li>  
                )
        })
            return(
                <div style = {{ backgroundColor : "#A3AFBA" }} >
               <Container style = {{padding : 50}}>
                   <h1>Please select the distributor you want order from</h1>
                   <br/>
                   <br/>
                   <ul style = {{border : 2}}> {couch}  </ul>
               </Container>
               </div>
                   )

        }if(this.state.orderpending === true &&this.state.change === false){
            return (
                <div style = {{paddingBottom :600 , backgroundColor : "#A3AFBA" }} >
                <Container style = {{paddingTop : 500 , textAlign : "center"}}>
                    <h1>Order Sent!</h1>
                    <p>Please Click this button when order is recieved</p>
                    <Button onClick = {this.onrecieve}>Recieved</Button>
                </Container>
                </div>
            )
        }

    }
}

export default Profile;