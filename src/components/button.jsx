import React, { Component } from "react";

class Button extends Component {
  state = {};

  render() {
    return (
      <div className="col-3">
        <button
          className="btn btn-outline-success btn-block"
          onClick={() => this.props.handleClick(this.props.value)}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
