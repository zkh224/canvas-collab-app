import React from "react";
import Canvas from "../canvas/Canvas";

import { FaEraser } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

import "./style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#000000",
      size: "10",
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
    
//    changeClearCanvas() {
//        var canvas = document.querySelector("#canvas");
//    this.ctx = canvas.getContext("2d");
//        context.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//    }
    
    clearCanvas = () => {
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Click happened');
  }

  render() {
    return (
      <div className="container">
        <div className="leftcol">
          <a href="https://welcometocanvascollab.netlify.app/">
          <img src="logoCC.png" alt="logo" style={{width: 72, height: 72, padding: 5, marginTop: 10}}/>
          </a>
          <div className="tools">

                <div className="color-picker">
                  <input
                    type="color"
                    id="penColor"
                    value={this.state.color}
                    onChange={this.changeColor.bind(this)}
                  />
                </div>

                <div className="pen-width">
                  <input
                    type="range"
                    min="1"
                    max="80"
                    value={this.state.size}
                    onChange={this.changeSize.bind(this)}
                  />
                </div>


                <div className="eraser">
                  <button
                    type="button"
                    className="btn-icon"
                    onClick={this.changeEraser.bind(this)}
                  >
                    <FaEraser size={28} className="icon" />
                  </button>
                </div>

                  <div className="clear">
                  <button
                    type="button"
                    className="btn-icon"
                    onClick={this.clearCanvas}
                  >
                    <FaRegTrashAlt size={28} className="icon" />
                  </button>
                </div>
              
              
          </div>
        </div>

          
        <Canvas color={this.state.color} size={this.state.size}>

        </Canvas>
          
      </div>
    );
  }
}

export default Container;
