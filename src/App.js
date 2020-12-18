import Reset from './pages/Reset'
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/reset/:uid/:token" component={Reset} />
      </Switch>
    </div>
  );
}

export default App;