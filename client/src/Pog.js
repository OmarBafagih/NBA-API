import React, { Component } from 'react'
import axios from "axios";

export default class Pog extends Component {
    constructor(){
        super();
        this.state = {
            liveGames:"not yet"
        }
    }
    componentDidMount = ()=>{
        axios.get("/livegames").then(response => {
          console.log(response.data.livegames);
        });
    }
  render() {
    return (
      <div>
        <h1>Very poggers</h1>
        <button>get live NBA games: {this.state.liveGames}</button>

      </div>
    )
  }
}
