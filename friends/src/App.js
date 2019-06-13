import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Friends from './components/Friends';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import UpdateForm from './components/UpdateForm';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  addFriend = newFriend => {
    axios.post('http://localhost:5000/friends', newFriend)
    .then(response => {
      console.log(response);
      this.setState({ friends: response.data });
      this.props.history.push('/friends');
    })
    .catch(error => {
      console.log(error);
    })
  }

  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({ activeFriend: friend });
  }

  render() {
    console.log(this.state.activeFriend)
    return (
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Home} />

        <Route exact path="/friends" render={props => 
            <Friends 
              {...props} 
              friends={this.state.friends}
            />
          }>
        </Route>

        <Route exact path="/friend-form" render={props => 
            <FriendForm 
              {...props} 
              addFriend={this.addFriend} 
            />
          }>
        </Route>

        <Route exact path="/friends/:id" render={props =>
            <Friend 
              {...props}
              friends={this.state.friends}
              setUpdateForm={this.setUpdateForm}
            />
          }>
        </Route>

        {/* <UpdateForm 
          setUpdateForm={this.setUpdateForm}
          activeFriend={this.state.activeFriend}
        /> */}
      </div>
    )
  }
}

export default App;
