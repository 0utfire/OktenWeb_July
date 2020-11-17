import './App.css';
import React, {useState} from "react";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import Userlist from "./components/userlist";
import User from "./components/user";
import PostList from "./components/postslist";
import CommentList from "./components/commentslist";
import {IdContext} from "./contextservice";
import {Posts} from "./components/posts";


function App() {

    const [userId, setUserId] = useState(null);

    const saveId = (id) => {
        setUserId(id)
    }

    const throwSavedId = saveId.bind(this)

  return (
      <IdContext.Provider value={userId}>
      <div>
        <div>
          <NavLink exact to='/'>Home</NavLink> &nbsp;
          <NavLink to='/users'>Userlist</NavLink> &nbsp;
          <NavLink to={{pathname: '/posts'}}>Posts</NavLink>&nbsp;
          <NavLink to={{pathname: '/comments'}}>Comments</NavLink>
            <hr/>
        </div>

        <div>
          <Switch>
              <Route exact path='/posts' component={Posts}/>
              <Route exact path='/comments' component={Comments}/>
              <Route exact path='/users/:id/posts' component={PostList}/>

              <Route exact path='/users/:id/comments' component={CommentList}/>
              <Route exact path='/users/:id' component={User}/>
              <Route exact path='/users' render={() => <Userlist saveUserId={throwSavedId}/>}/>
              <Route exact path='/ ' render={() => <h1>Main component</h1>}/>
          </Switch>
        </div>
      </div>
      </IdContext.Provider>
  );
}

export default App;
