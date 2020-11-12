import './App.css';
import React from "react";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import Userlist from "./components/userlist";
import User from "./components/user";
import PostList from "./components/postslist";

function App() {
  return (
      <div>
        <div>
          <NavLink exact to='/'>Home</NavLink><br/>
          <NavLink to='/users'>Userlist</NavLink><br/>
          <NavLink to={{
            pathname: '/posts'
          }}>Posts</NavLink><hr/>
        </div>

        <div>
          <Switch>
            <Route exact path='/users/:id/posts' component={PostList}/>
            <Route exact path='/users/:id' component={User}/>
            <Route exact path='/users' component={Userlist}/>
            <Route exact path='/ ' render={() => <h1>Main component</h1>}/>
          </Switch>
        </div>
      </div>
  );
}

export default App;
