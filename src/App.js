import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      items:[],
      isLoaded: false,
    }
  }

  fetchPokemon =() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=807")
      .then(res=> res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.results,
        })
      });
  }

  render(){
    var { isLoaded, items } = this.state;
    
    if (!isLoaded){
      return (
        <div className="App">
        <div>
          <button onClick={this.fetchPokemon}>Summon pokemon</button>
        </div>
        </div>
        )
    }
    else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <p key={items.id}> {item.name} </p>
            ))}
          </ul>
        </div>
      );
    }
  }
}   
export default App;