import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notfound from './components/layout/Notfound';
import Landing from './components/layout/Landing';
import PostsDetail from './components/layout/PostsDetail'; 
class App extends Component {
  render() {
    
    return (
      
      <Router>
        <div className="App">
        <Switch>
          
          <Route exact path="/" component={Landing}/>
          <Route path="/buy" component={PostsDetail}/>
          
          <Route exact path="*" component={Notfound} />
          </Switch>
     </div>
      </Router>
    );
  }
}

export default App;
