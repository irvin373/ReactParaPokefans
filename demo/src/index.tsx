import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Fantasma from "./Fantasma";

const images = [
  "https://github.com/irvin373/ReactParaPokefans/blob/main/material/assets/Gastly.png?raw=true",
  "https://github.com/irvin373/ReactParaPokefans/blob/main/material/assets/Haunter.png?raw=true",
  "https://github.com/irvin373/ReactParaPokefans/blob/main/material/assets/Gengar.png?raw=true"
];

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Irvin"
    };
  }

  mostrarClick = (id: number) => {
    console.log("se presiono al ", id);
  };

  render() {
    return (
      <div>
        <Fantasma id={1} mostrarClick={this.mostrarClick} imagenes={images} />
        <Fantasma id={2} mostrarClick={this.mostrarClick} imagenes={images} />
        <Fantasma id={3} mostrarClick={this.mostrarClick} imagenes={images} />
        <Fantasma id={4} mostrarClick={this.mostrarClick} imagenes={images} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
