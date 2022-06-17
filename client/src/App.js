import { Switch,Route,Link,Redirect, useHistory } from 'react-router-dom';
import React,{useContext, useEffect, useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AddPirate from './views/AddPirate';
import EditPriate from './views/EditPriate';
import Error from './views/Error';
import Home from './views/Home';
import Login from './views/Login';
import SinglePirate from './views/SinglePirate';
import Resources from './views/Resources.js'



function App() {
  const [login,setlogin] = useState("1q2w3e4r")

  return (
    <div className="App">
      <Switch>
        {/* LOGIN */}
        <Route exact path="/">
          <Login />
        </Route>

        {/* PIRATES */}
        <Route exact path="/pirates">
          <Navigation login={login} />
          <Home />
          <Footer />
        </Route>

        <Route exact path="/createPirate">
          <Navigation />
          <AddPirate/>
        </Route>

        <Route exact path="/pirate/:id">
          <Navigation />
          <SinglePirate  login={login} />
          <Footer />
        </Route>

        <Route exact path="/editPirate/:id">
          <Navigation />
          <EditPriate />
          <Footer />
        </Route>

        <Route exact path="/resources">
          <Navigation />
          <Resources />
          <Footer />
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
