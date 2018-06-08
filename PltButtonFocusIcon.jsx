import React, {Component} from "react";

import './button.css';


class PltButtonFocusIcon extends Component {
  constructor(props) {
      super(props);

  }
   render(){

    let btnPltFocus = this.props.btnPltFocus;

      return (
         
          <button className={btnPltFocus}  >
         {  this.props.text }
         
         { this.props.icon && this.props.icon
}
        </button> 
        
          )
        };
}


export default PltButtonFocusIcon;
