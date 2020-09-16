import React , {Component} from 'react'
import axios from 'axios'
import {Container , Row , Col , Card , Table, Button} from 'react-bootstrap'
import CardComponentDis from './cardDis'
import aman from './images/aman.png'
import gadra from './images/gadra.png'
import neel from './images/neel.png'
import sondos from './images/sondos.png'
import StartPage from './LoginPage'

class ProfileDis extends Component {
constructor(){
    super()
    this.state = {
        begin : false ,
        tahir : "",
        Alneel : "" ,
        Agip : "",
        Aman : "" ,
        Sondos : "" ,
        loggingout : false,
        hoy : false,
        neworder : false,
        movingorder : ""

        
    }
    this.add=this.add.bind(this)
    this.sub=this.sub.bind(this)
    this.onchange = this.onchange.bind(this)
    this.logout = this.logout.bind(this)
    this.theone = this.theone.bind(this)
    this.myorders = this.myorders.bind(this)
    this.ordersent = this.ordersent.bind(this)
    this.ordersent2 = this.ordersent2.bind(this)

}


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
            this.setState({ begin : true})
        })
     
}
onchange(event){
    const {name ,value} = event.target
    this.setState ({
       [name] : value
    })   
    console.log(this.state)
}
add(pass){
    const token = localStorage.getItem('logininfo' )
    const dest = JSON.parse(token)
    const head = {
        "authorize" : dest.token
     }
     if(pass === "Aman"){
         const bod = {
             [pass] : this.state.Aman
            }
            return(
                axios.post('http://localhost:5000/distributor/addorderaman' , bod ,{headers :head} )
                .then(res => {
                    console.log(res.data )
                    console.log(pass)
                    console.log(bod)
                    localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                    setTimeout(() => {
                        this.setState({
                            begin : true
                        })
                        console.log(this.state)
                    }, 3000);
                    this.setState({
                        begin : false
                    })
            })
        )
    }if(pass === "Agip"){
        const bod = {
            [pass] : this.state.Agip
           }
           return(
            axios.post('http://localhost:5000/distributor/addorderagip' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }if(pass === "Sondos"){
        const bod = {
            [pass] : this.state.Sondos
           }
           return(
            axios.post('http://localhost:5000/distributor/addordersondos' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }if(pass === "Abarsy"){
        const bod = {
            [pass] : this.state.Abersy
           }
           return(
            axios.post('http://localhost:5000/distributor/addorderabarsy' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }if(pass === "Alneel"){
        const bod = {
            [pass] : this.state.Alneel
           }
           return(
            axios.post('http://localhost:5000/distributor/addorderneel' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                }) 
        })
    )
    }
}
sub(pass){
    const token = localStorage.getItem('logininfo' )
    const dest = JSON.parse(token)
    const head = {
        "authorize" : dest.token
     }
     if(pass === "Aman"){
         const bod = {
             [pass] : this.state.Aman
            }
            return(
                axios.post('http://localhost:5000/distributor/orderaman' , bod ,{headers :head} )
                .then(res => {
                    console.log(res.data )
                    console.log(pass)
                    console.log(bod)
                    localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                    setTimeout(() => {
                        this.setState({
                            begin : true
                        })
                        console.log(this.state)
                    }, 3000);
                    this.setState({
                        begin : false
                    })
            })
        )
    }if(pass === "Agip"){
        const bod = {
            [pass] : this.state.Agip
           }
           return(
            axios.post('http://localhost:5000/distributor/orderagip' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }if(pass === "Sondos"){
        const bod = {
            [pass] : this.state.Sondos
           }
           return(
            axios.post('http://localhost:5000/distributor/ordersondos' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }if(pass === "Abarsy"){
        const bod = {
            [pass] : this.state.Abersy
           }
           return(
            axios.post('http://localhost:5000/distributor/orderabarsy' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }if(pass === "Alneel"){
        const bod = {
            [pass] : this.state.Alneel
           }
           return(
            axios.post('http://localhost:5000/distributor/orderneel' , bod , {headers :head} )
            .then(res => {
                console.log(res.data)
                console.log(pass)
                console.log(bod)
                localStorage.setItem('userinfo' , JSON.stringify({data : res.data}))
                setTimeout(() => {
                    this.setState({
                        begin : true
                    })
                    console.log(this.state)
                }, 3000);
                this.setState({
                    begin : false
                })
        })
    )
    }
    
}
logout(){

    localStorage.clear()
    return (
        this.setState({
            begin : false ,
            tahir : "",
            Alneel : "" ,
            Agip : "",
            Aman : "" ,
            Sondos : "" ,
            loggingout : true
        })
        
    )
}
theone(){
    this.setState({
        hoy : true
    })
}
myorders(){
    this.setState({
        neworder : true
    })
}
ordersent(pass){
    const mid = pass
    const you = mid.pass
    const here = localStorage.getItem('userinfo')
    const there = JSON.parse(here)
    
    const token = localStorage.getItem('logininfo' )
    const dest = JSON.parse(token)
    const head = {
       "authorize" : dest.token
    }
   const bod = {
        id : mid.pass
    }
    console.log(bod)
    axios.post('http://localhost:5000/distributor/delorder' , bod , {headers : head})
    .then(res => {
        console.log(res.data )
        
    })
}
ordersent2(pass){
    const mid = pass
    console.log(pass)
    const token = localStorage.getItem('logininfo' )
    const dest = JSON.parse(token)
    this.setState({ movingorder : mid.pass})
    console.log(this.state.movingorder)
    const head = {
       "authorize" : dest.token
    }
   const bod = {
        myorders : mid.pass
    }
    console.log(bod)
    axios.post('http://localhost:5000/distributor/middle' , bod , {headers : head})
    .then(res => {
        console.log(res.data )
        
    })
}
    


render(){
    const cred = localStorage.getItem('userinfo')
        const cred2 = JSON.parse(cred) 
            
      
        if(this.state.begin === false && this.state.loggingout === false && this.state.hoy === false && this.state.neworder === false){
            return(
                <div>
                    <h1>Loading....</h1>
                </div>
            )
        }if(this.state.begin === true && this.state.loggingout === false && this.state.hoy === false && this.state.neworder === false){
    return(
        <div style = {{backgroundColor : "#A3AFBA"}}>
         <Container style = {{paddingBottom :30}}> 
               <div style = {{paddingLeft : 800 , paddingTop :10 }}>
                   <Row>
         <Button variant = "success" onClick = {this.theone} >My Orders</Button>
         <Button variant = "success" onClick = {this.logout} >Log out</Button>
    
         </Row>
              </div>
            <h1 style = {{paddingBottom :30}}> hello {cred2.data.username}, welcome back!</h1>
            <h2>you have <Button onClick = {this.myorders}>{cred2.data.myorders.length}</Button> new orders </h2>
            <br/>
            <br/>
            <Row>
                <Col>
                <CardComponentDis 
                        image = {aman}
                        title = "Aman"
                        name = "Aman"
                        text = {"number of cylinders " + cred2.data.Aman}
                        onclick = {() =>this.add("Aman")}
                        onclick2 = {() =>this.sub("Aman")}
                        onchange = {this.onchange}
                        />
                </Col>
                <Col>
                <CardComponentDis 
                        image = {neel}
                        title = "Alneel"
                        name = "Alneel"
                        text = {"number of cylinders " + cred2.data.Alneel}
                        onchange = {this.onchange}
                        onclick = {() => this.add( "Alneel")}
                        onclick2 = {() => this.sub( "Alneel")}
                        />
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col>
                <CardComponentDis 
                        image = {sondos}
                        title = "Sondos"
                        name = "Sondos"
                        text = {"number of cylinders " + cred2.data.Sondos}
                        onchange = {this.onchange}
                        onclick = {()=>this.add( "Sondos")}
                        onclick2 = {()=>this.sub( "Sondos")}
                        />
                </Col>
                
                <Col>
                <CardComponentDis 
                        image = {gadra}
                        title = "Agip"
                        name = "Agip"
                        text = {"number of cylinders " + cred2.data.Agip}
                        onchange = {this.onchange}
                        onclick = {() => this.add("Agip")}
                        onclick2 = {() => this.sub("Agip")}
                        />
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
            <CardComponentDis 
                        image = {neel}
                        title = "Abersy"
                        name = "Abersy"
                        text = {"number of cylinders " + cred2.data.Abarsy}
                        onchange = {this.onchange}
                        onclick = {() => this.add( "Abersy")}
                        onclick2 = {() => this.sub("Abarsy")}
                        />
            </Row>
        </Container>
        </div>
    )
        }if(this.state.begin === false && this.state.loggingout === true && this.state.hoy === false){
            return(
                <div>
                    <StartPage/>
                </div>
            )
        }if( this.state.begin === true && this.state.loggingout === false && this.state.hoy === true){
            const mine = cred2.data.orders.map( user => {
                return(
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Cylinder Name</th>
                                    <th>Quantity</th>
                                    <th>Customer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>  * </td>
                                    <td> {user.name} </td>
                                    <td> {user.amount} </td>
                                    <td> {user.customer} </td>
                                    </tr>
                                </tbody>
                                </Table>
                                                        
                 </div>
                )
                
            })
            
            return(
                <div style = {{backgroundColor : "#A3AFBA" , paddingBottom: 1000}} >
                    <h1 style = {{textAlign : "center"}} > My Orders</h1>
                    <Container style = {{backgroundColor : "#A3AFBA"}}>
                     {mine}
                    </Container>
                 </div>
            )
        }if(this.state.begin === true && this.state.loggingout === false && this.state.hoy === false && this.state.neworder === true){
            const mine = cred2.data.myorders.map( user => {
                return(
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Cylinder Name</th>
                                    <th>Quantity</th>
                                    <th>Customer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>  * </td>
                                    <td> {user.name} </td>
                                    <td> {user.amount} </td>
                                    <td> {user.customer} </td>
                                    <td> <Button onClick = {()=> this.ordersent2({pass : {_id :user._id ,
                                         name :user.name,
                                         amount :user.amount ,
                                         customer : user.customer}  })}>accept</Button> </td>
                                         <td> <Button onClick = {()=> this.ordersent({pass : user._id })}>remove when accepted</Button> </td>
                                    </tr>
                                </tbody>
                                </Table>
                                                        
                 </div>
                )
                
            })
            
            return(
                <div style = {{backgroundColor : "#A3AFBA" , paddingBottom: 1000}} >
                    <h1 style = {{textAlign : "center"}} > My Orders</h1>
                    <Container style = {{backgroundColor : "#A3AFBA"}}>
                     {mine}
                    </Container>
                 </div>
            )
        
        }
}
}

export default ProfileDis;



//ok now i want to make some place where there are new orders not the orderss. when a customer orders it goes to that place,
//and then then he accepts or not, then after the customer arecieves the order it gets stored in the My order,
//i created a field called myorders in the model i can do an axios.post from the front end to there. then after that
//the customer recieves the order, when he recieves the order he hits okay which deletes this order from myorders in the backend,
// and then stores it in the orders field "My Orders"