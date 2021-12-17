import React from "react";
import Canvas from "../canvas/Canvas";

import { FaEraser } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { CirclePicker  } from 'react-color';

import "./style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#000000",
      size: "10",
      colors: ["#ff0000", "#0080ff", "#02b802", "#ff00ff", '#9100fa', '#ffaa07', "#570000", "#000000"]
    };
  }
    
    
  handleSwitchColor = (color) => {
        this.setState({color: color.hex});
    };

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
            <div className="logo">
                <a href="https://welcometocanvascollab.netlify.app/">
                <img src="logoCC.png" alt="logo" />
                </a>
            </div>
        

          <div className="tools">

                <div className="color-picker">
                  <input
                    type="color"
                    id="penColor"
                    value={this.state.color}
                    onChange={this.changeColor.bind(this)}
                  />
                    
                    <div className="display-picker">
                        <CirclePicker  onChangeComplete={this.handleSwitchColor} colors={ this.state.colors } width='100px' />
                    </div>  
                </div>

                <div className="pen-width">
                  <input
                    type="range"
                    min="5"
                    max="100"
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
