import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Docs from './pages/Docs'
import Status from './pages/Status'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Error from './pages/Error'
import Policy from './pages/Policy'
import Legal from './pages/Legal'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Navbar />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/docs" component={Docs} />
        <Route path="/status" component={Status} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/policy" component={Policy} />
        <Route path="/legal" component={Legal} />
        <Route component={Error} />
      </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
