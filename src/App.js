import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import Output from "./components/output";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  state = {
    buttons: [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "AC", 0, "=", "/"],
    input: "",
    output: ""
  };

  handleClick = v => {
    if (typeof v == "number") {
      if (this.state.output.includes("=")) {
        this.setState({
          input: v,
          output: ""
        });
      } else {
        console.log(typeof this.state.input, this.state.input, typeof v, v);
        this.setState({ input: this.state.input.toString() + v });
      }
    } else {
      if (v == "=") {
        if (this.state.input == "") {
          this.setState({
            input: eval(this.state.output.slice(0, -1)),
            output:
              this.state.output.slice(0, -1) +
              v +
              eval(this.state.output.slice(0, -1))
          });
        } else {
          this.setState({
            input: eval(this.state.output + this.state.input),
            output:
              this.state.output +
              this.state.input +
              v +
              eval(this.state.output + this.state.input)
          });
        }
      } else if (v == "AC") {
        this.setState({
          input: "",
          output: ""
        });
      } else {
        if (this.state.output.includes("=")) {
          this.setState({
            input: "",
            output: this.state.input + v
          });
        } else {
          if (this.state.input == "") {
            this.setState({
              input: "",
              output: this.state.output.slice(0, -1) + v
            });
          } else {
            this.setState({
              input: "",
              output: this.state.output + this.state.input + v
            });
          }
        }
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-8 mr-auto ml-auto" style={{ marginTop: "7em" }}>
            <div className="row">
              <Output output={this.state.output} />
              <Input input={this.state.input} />
            </div>
            <div className="row">
              {this.state.buttons.map(button => (
                <Button
                  value={button}
                  key={button}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
