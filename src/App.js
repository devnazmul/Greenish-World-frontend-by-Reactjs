import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Home from "./Pages/Home/Home";

import PrivateRoute from "./Private/PrivateRoute";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Contact from "./Pages/Home/Components/Contact/Contact";

import Purchase from "./Pages/Purchase/Purchase";
import PurchaseDone from "./Pages/PurchaseDone/PurchaseDone";
import Plants from "./Pages/Home/Components/Services/Plants";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Switch>
          <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/done_purchase">
              <PurchaseDone />
            </PrivateRoute>
            <PrivateRoute exact path="/purchase/:_id">
              <Purchase />
            </PrivateRoute>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/plants">
              <Plants />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
