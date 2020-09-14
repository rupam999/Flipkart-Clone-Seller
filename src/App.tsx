import React from 'react';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WindowDimensions from './components/WindowDimensions';
import { StoreProvider } from './Context/Store';
import { Login } from './Screens/Mobile/SignInFlow';
import { MainNavigation } from './Screens/Mobile/Navigation';

const App = () => {
  const {width} = WindowDimensions();
  if(width > 900){
    return (
      <Router>
        <p>Desktop Device Screen</p>
      </Router>
    );
  } else {
    {/* Mobile Device Screen */}
    return (
      <StoreProvider>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/seller" component={MainNavigation} />
        </Router>
      </StoreProvider>
    );
  }
}

export default App;
