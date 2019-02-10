import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12">
        <input className="form-control" value={this.props.input} style={{textAlign:'right'}} />
      </div>
    );
  }
}

export default Input;
