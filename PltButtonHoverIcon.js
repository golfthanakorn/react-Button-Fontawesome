import React, {Component} from "react";

import './button.css';


class PltButtonHoverIcon extends Component {
  constructor(props) {
      super(props);

  }
   render(){

    let btnPltHover = this.props.btnPltHover;

      return (
         
          <button className={btnPltHover}  >
         {  this.props.text }
         
          { this.props.icon && this.props.icon
}
        </button> 
        
          )
        };
}


export default PltButtonHoverIcon;
