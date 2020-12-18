import Reset from './pages/Reset'
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/reset/:uid/:token" component={Reset} />
      </Switch>
    </div>
  );
}

export default App;