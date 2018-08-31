import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import users from './Data';
import  Usuario  from './components/user'
console.log(users);



class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      users,
    };
  }
  
  
  render() {
  const { users } = this.state;
    
    return (
      <main>
      {users.map( (user) => <Usuario data={user} /> ) }
      </main>
    );

  }
}

export default App;