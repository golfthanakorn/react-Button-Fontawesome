import React, {Component} from "react";

import './button.css';



class PltButtonNormalIcon extends Component {
  constructor(props) {
      super(props);

  }
   render(){

    let btnPlt = this.props.btnPlt;

      return (
         
          <button className={btnPlt}  >
         {  this.props.text }
         
         { this.props.icon && this.props.icon
}
        </button> 
        
          )
        };
}


export default PltButtonNormalIcon;
