import React , {Component} from 'react'
import LPGcomponent from './components/LPGcomponent'
import axios from 'axios'
import neel  from './images/neel.png'
import aman  from './images/aman.png'
import gadra  from './images/gadra.png'
import sondos  from './images/sondos.png'



class SPD extends Component {
    constructor(props){
        super(props)
        this.state = {
            firststate : ""
               }
               this.buttonhandler=this.buttonhandler.bind(this)
    }

     buttonhandler(){
         axios.get("http://localhost:5000/distributor/" )
         .then( (res) => {console.log(res.data)})
             
     }
    render(){
        return(
            <div style = {{textAlign : "center"}}>

                <h1>Please select your order : </h1>

                <LPGcomponent 
                image = {neel}
                name = "Alneel"
                size = "100"
                 />
                 <button onClick = {this.buttonhandler}>order</button>
                 <br/>
                 <br/>
                <LPGcomponent 
                image = {aman}
                name = "aman"
                size = "100"
                 />
                 < button onClick = {this.buttonhandler}>order</button>
                <br/>
                <LPGcomponent 
                image = {sondos}
                name = "sondos"
                size = "100"
                 />
                 <button onClick = {this.buttonhandler}>order</button>
                <br/>
                <LPGcomponent 
                image = {gadra}
                name = "gadra"
                size = "100"
                 />
                 <button onClick = {this.buttonhandler}>order</button>
                <br/>
                <LPGcomponent 
                image = {"http://www.w3.org/2000/svg0"}
                name = "agip"
                size = "100"
                 />
                 <button onClick = {this.buttonhandler}>order</button>

            </div>
        )
    }
}

export default SPD;