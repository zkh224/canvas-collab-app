import React from "react";
import Canvas from "../canvas/Canvas";

import { FaEraser } from "react-icons/fa";

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

  changeEraser() {
    this.setState({
      color: "#ffffff",
    });
  }

  render() {
    return (
      <div className="container">
        <center className="tools">
          <div className="color-picker">
            <label htmlFor="penColor">Color Picker </label>
            <input
              type="color"
              id="penColor"
              value={this.state.color}
              onChange={this.changeColor.bind(this)}
            />
          </div>

          <div className="pen-width">
            <label htmlFor="lineWidth">Pen Size </label>
            <input
              type="range"
              min="1"
              max="10"
              value={this.state.size}
              onChange={this.changeSize.bind(this)}
            />
          </div>
          {/* <Eraser
            // onChange={this.changeEraser.bind(this)}
            handleEraser={this.changeEraser.bind(this)}
          /> */}

          <div className="eraser">
            {/* <FontAwesomeIcon
    title="erase"
    icon={FaEraser}
    className="fa-icon"
    value={this.state.eraser}
    onClick={this.handleEraser.bind(this)}
  /> */}
            <label htmlFor="eraser">Eraser </label>
            <button
              type="button"
              className="btn-eraser"
              onClick={this.changeEraser.bind(this)}
            >
              <FaEraser />
            </button>
          </div>
        </center>

        <div className="canvas-container">
          <Canvas color={this.state.color} size={this.state.size}></Canvas>
        </div>
      </div>
    );
  }
}

export default Container;
