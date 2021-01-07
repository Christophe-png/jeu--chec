import React, { Component } from "react";
import axios from "axios";
import PieceList from "./Components/PieceList";
import "./App.css";

class App extends Component {
  state = {
    pieces: [],
  };

  componentDidMount = () => {
    this.fetchPieces();
  };

  fetchPieces = () => {
    axios
      .get("https://my-json-server.typicode.com/Christophe-png/jeu--chec/db")
      .then((response) => response.data)
      .then((data) => {
        console.log(data["les pièces"]);
        this.setState({
          pieces: data["les pièces"],
        });
      });
  };

  render() {
    const { pieces } = this.state;
    return (
      <div className="App">
        <p>Hello !</p>
        <PieceList pieces={pieces} />
      </div>
    );
  }
}

export default App;
