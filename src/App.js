import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <Router>

      <div>
        <Switch>
          <Route path='/checkout'>
            <Header />
            <h1>Checkout </h1>
          </Route>

          <Route path='/login'>
            <h1>Login </h1>
          </Route>

          <Route path='/returns'>
            <Header />
            <h1>Returns </h1>
          </Route>

          <Route path='/basket'>
            <Header />
            <h1>Your Basket </h1>
          </Route>



          <Route path='/'>
            <Header />
            <h1> Home Page </h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
