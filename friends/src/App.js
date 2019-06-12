import React from 'react';
import axios from 'axios';
import uuid from 'uuid';

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ data: response.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addFriend = event => {
    event.preventDefault();

    const newFriend = {
      id: uuid.v4(),
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    axios.post('http://localhost:5000/friends', newFriend)
    .then(response => {
      console.log(response);
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <FriendForm 
          onInputChange={this.onInputChange} 
          addFriend={this.addFriend}
        />
        <Friends friends={this.state.data} />
      </div>
    )
  }
}

export default App;
