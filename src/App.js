import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { Message } from './components/message/message.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      message: ''
    };
  }

  async componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

    fetch(`/api/message`)
      .then(response => response.json())
      .then(content => this.setState({ message: content.text }) )
  }

  render() {

    const { monsters, searchField, message } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className="App">
        <Message message={message} />
        <input
          type='text'
          placeholder='search monsters'
          onChange={e => this.setState({ searchField: e.target.value })
          } />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
