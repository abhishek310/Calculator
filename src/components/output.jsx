import React, { Component } from "react";

class Output extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12">
        <input className="form-control" value={this.props.output} style={{textAlign:'right'}} />
      </div>
    );
  }
}

export default Output;
