import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SideDrawer from './components/SideDrawer';
import Home from './components/Home';
import Projects from './components/Projects';

const font = "'Slabo 27px', 'Noto Serif KR',serif";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <SideDrawer />
          <div style={{ marginTop: '10%' }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
