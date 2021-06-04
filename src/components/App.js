import React from "react";
import { Container, Nav } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Signin from "./Signin";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Navigation from "./Navbar";
import CoursePage from "./CoursePage";
import Help from "./Help";
import About from "./About";
import Navigation2 from "./Navbar2";

function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/updateprofile" component={UpdateProfile} />
            <Route path='/coursepage' component={CoursePage}/>
            <Route path='/help' component={Help} />
            <Route path='/about' component={About} />
          </Switch>
        </AuthProvider>
      </Router>
      {/* </div> */}
    </Container>
  );
}

export default App;
