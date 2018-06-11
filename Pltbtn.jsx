import React, {Component} from "react";

import './link.css';



class Pltbtn extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        let btnPlt = this.props.btnPlt;
        
        return(
        
         <button className={btnPlt}  >
       { (this.props.iconRight == undefined 
            && this.props.icon) 
          && this.props.icon }
         
         {  this.props.text }
         
         { (this.props.iconRight && this.props.icon) && this.props.icon
}
        </button> 
        
        )
    };
}

export default Pltbtn;
