import React from 'react';
import './App.css';
import Game from './components/TicTacToe/index.js';
import Login from './components/login/index.js';

class Register extends React.Component {
  clickHandler() {
    console.log("User is registering");
    console.log(this);
    for(const user of this.props.users){
      if(this.refs.username.value === user.username && 
      this.refs.password.value === user.password)
        this.props.Register();
    }
  }
  render() {
  return (
    <div>
    <input ref="username" type="text"/>
    <input ref="password" type="text"/>
    </div>
  )
}
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn:false,
    users:[{username:"test",password:"test"},{username:" ", password:" "}]
    }
  }
  logInUser(loggedInStatus) {
    this.setState({loggedIn:loggedInStatus});
  }
  render() {
  return (
    (this.state.register) ?
      <Register />
    :
      (!this.state.loggedIn) ?
  <Login users={this.state.users}
  logInUser={() => this.logInUser(true)} />
  :
  <Game logOutUser={() => this.logInUser(false)} />
  )
  }
}
export default App;
