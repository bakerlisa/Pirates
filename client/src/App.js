import { Switch,Route,Link,Redirect, useHistory } from 'react-router-dom';
import './App.css';

import AddPirate from './views/AddPirate';
import EditPriate from './views/EditPriate';
import Error from './views/Error';
import Home from './views/Home';
import Login from './views/Login';
import SinglePirate from './views/SinglePirate';

function App() {
  const history = useHistory();
  // const loggedIn = localStorage.getItem('name');
  // const logout = (event) => {
  //   localStorage.clear();
  //   history.push("/"); 
  // }

  return (
    <div className="App">
      
      <Switch>
        {/* LOGIN */}
        <Route exact path="/">
          <Login />
        </Route>

        {/* PIRATES */}
        <Route exact path="/pirates">
          <Home />
        </Route>

        <Route exact path="/createPirate">
          <AddPirate />
        </Route>

        <Route exact path="/pirate/:id">
          <SinglePirate />
        </Route>

        <Route exact path="/editPirate/:id">
          <EditPriate />
        </Route>

        {/* ERROR/404 routes */}
        <Route exact path="/404">
          <Error />
        </Route>

        <Route><Redirect to="/404" /></Route>
      </Switch>
    </div>
  );
}

export default App;
