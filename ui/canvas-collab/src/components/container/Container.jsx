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
        <div class="canvas-container">
          <Canvas></Canvas>
        </div>

        <center className="tools">
          <div className="color-picker">
            <label htmlFor="penColor">Color Picker</label>
            <input type="color" id="penColor" />
          </div>

          <div className="pen-width">
            <label htmlFor="lineWidth">Pen Width</label>
            <input type="range" min="1" max="10" value="2" />
          </div>
        </center>
      </div>
    );
  }
}

export default Container;
