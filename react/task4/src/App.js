import './App.css';
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import {Postlist} from "./data/components/postlist";
import Userlist from "./data/components/userlist";
import User from "./data/components/user";

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
                  <Route exact path='/users/:id' component={User}/>
                  <Route exact path='/users' component={Userlist}/>
                  <Route exact path='/posts' component={Postlist}/>
                  <Route exact path='/ ' render={() => <h1>Main component</h1>}/>
              </Switch>
          </div>
      </div>
  );
}

export default App;
