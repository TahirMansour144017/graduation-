import React , {Component} from 'react'
import SPD
 from "./SPD";
class SPC extends Component {
    constructor(props){
        super(props)
        this.state = {
            firststate : ""
               }
    }

    render(){
        return(
            <div>
               <SPD/>
            </div>
        )
    }
}

export default SPC;