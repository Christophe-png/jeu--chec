import React, { Component } from "react";
import axios from "axios";
import PieceList from "./Components/PieceList";

class App extends Component {
  state = {
    pieces: [],
  };

  componentDidMount = () => {
    this.fetchPieces();
  };

  fetchPieces = () => {
    axios
      .get("https://github.com/Christophe-png/jeu--chec/blob/master/db.json")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          pieces: data,
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
