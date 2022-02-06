import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

function App() {
  // Destructure the authIsReady property from our useAuthContext hook 
  const { user, authIsReady } = useAuthContext();

  // Object that holds the loading screen styles
  const loadingStyle =
    { width: "fit-content", margin: "auto", display: "flex", height: '100vh', alignItems: "center" };

  // Function that return's the color to be used for the background screen, which is based on the current state of the authIsReady property. 
  const backgroundStyle = () => {
    let style = '';
    if (!authIsReady) {
      style = { backgroundColor: '#effaf0' };
    } else if (authIsReady) {
      style = { backgroundColor: 'inherit' };
    }
    return style;
  };

  return (
    <div className="App" style={backgroundStyle()}>
      {authIsReady === true ?
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}

            </Route>

            <Route path="/signup">
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>

            <Route path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>

          </Switch>

        </BrowserRouter>
        :
        <h2 style={loadingStyle}>Loading...</h2>
      }

    </div>
  );
}

export default App;
