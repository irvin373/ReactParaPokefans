import React, { Component } from "react";

type Props = {
  imagenes: string[];
  id: number;
  mostrarClick: (id: number) => void;
};

type State = {
  contador: number;
  fantasmaUrl: string;
  index: number;
  position: { top: number; left: number };
};

export default class Fantasma extends Component<Props> {
  state: State = {
    contador: 0,
    position: { top: 200, left: 200 },
    index: 0,
    fantasmaUrl: this.props.imagenes[0]
  };

  componentWillMount() {
    setInterval(() => {
      this.setState({ position: this.getSpace() });
    }, 1400);
  }

  getRandom(min: number, max: number) {
    return ~~(Math.random() * (max - min) + min);
  }

  getSpace() {
    const imgSize = 150;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const height = innerHeight - imgSize;
    const width = innerWidth - imgSize;
    const top = this.getRandom(0, height);
    const left = this.getRandom(0, width);
    // console.log(top);
    return { top, left };
  }

  cambiarFantasma = () => {
    let index = this.state.index + 1;
    const imagenes = this.props.imagenes;
    const size = imagenes.length;
    this.setState({
      index,
      fantasmaUrl: imagenes[index]
    });
  };

  render() {
    if (this.state.index === 3) {
      return null;
    }
    return (
      <img
        style={this.state.position}
        className="App-logo"
        onClick={() => {
          this.props.mostrarClick(this.props.id);
          this.cambiarFantasma();
        }}
        src={this.state.fantasmaUrl}
      />
    );
  }
}
