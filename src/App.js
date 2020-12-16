import React from 'react';
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Docs from './pages/Docs'
import Status from './pages/Status'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/docs" component={Docs} />
        <Route path="/status" component={Status} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={Error} />
      </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
