import React, {Component} from "react";

import './button.css';



class PltbtnDis extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        let btnPltDis = this.props.btnPltDis;
        
        return(
        
         <button className={btnPltDis}  >
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

export default PltbtnDis;
