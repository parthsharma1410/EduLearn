import React from 'react'
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import Signup from './Signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Signin from './Signin'
import ForgotPassword from './ForgotPassword'
import PrivateRoute from './PrivateRoute'
import UpdateProfile from './UpdateProfile'

function App() {
  return (
   
    <Container className="d-flex align-items-center justify-content-center" style={ {minHeight: "100vh"}}>
      <div className="w-100" style={{ maxWidth: "400px"}}>
      <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/forgotpassword' component={ForgotPassword} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/updateprofile' component={UpdateProfile} />
        </Switch>
    </AuthProvider>

      </Router>
      </div>
    </Container>
  );
}

export default App;
