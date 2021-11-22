import React from "react";
import Canvas from "../canvas/Canvas";
import "./style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#000000",
      size: "5",
    };
  }

  changeColor(params) {
    this.setState({
      color: params.target.value,
    });
  }

  changeSize(params) {
    this.setState({
      size: params.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <center className="tools">
          <div className="color-picker">
            <label htmlFor="penColor">Color Picker</label>
            <input
              type="color"
              id="penColor"
              value={this.state.color}
              onChange={this.changeColor.bind(this)}
            />
          </div>

          <div className="pen-width">
            <label htmlFor="lineWidth">Pen Size</label>
            <input
              type="range"
              min="1"
              max="10"
              value={this.state.size}
              onChange={this.changeSize.bind(this)}
            />
          </div>
        </center>

        <div class="canvas-container">
          <Canvas color={this.state.color} size={this.state.size}></Canvas>
        </div>
      </div>
    );
  }
}

export default Container;
