import React from 'react';

class Login extends React.Component {
    clickHandler() {
      console.log("User is logging on");
      console.log(this);
      for(const user of this.props.users){
        if(this.refs.username.value === user.username && 
        this.refs.password.value === user.password)
          this.props.logInUser();
      }
    }
    render() {
    return <div>
      <input ref="username" type="text"/>
      <input ref="password" type="text"/>
      <input type="button" value="Login" onClick={() => this.clickHandler()} />
      </div>;
    }
  }
  export default Login;