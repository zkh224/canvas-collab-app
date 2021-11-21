import React from "react";
import Canvas from "../canvas/Canvas";
import "./style.css";

class Container extends React.Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    return (
      <div className="container">
        <div className="color-picker">
          <input type="color" />
        </div>

        <div class="canvas-container">
          <Canvas></Canvas>
        </div>
      </div>
    );
  }
}

export default Container;
