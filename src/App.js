import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Profiles from './components/Profiles';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    this.getDinosaurs()
  }

  getDinosaurs = () => {
    let apiURL = './dinosaurs.json';
    return fetch(apiURL)
      .then(response => response.json())
      .then(cardData => {
        this.setState({ profiles: cardData.map(card => {
          return {...card,...{styleCondition:true}}
        })
      })
      })
  }

  toggleClass = (card) => {
    card.styleCondition = !card.styleCondition;
    this.setState({profiles: this.state.profiles})
  };

  render() {
    return (
      <div>
        <Header />
        <Profiles profiles={this.state.profiles} toggleClass={this.toggleClass} />
        <Footer />
      </div>
    )
  }
}
export default App;
