import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import One from './components/one';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/one" component={One} />
      </Router>
    </div>
  );
}

export default App;
