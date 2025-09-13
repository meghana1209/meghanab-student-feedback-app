import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FeedbackForm from './components/FeedbackForm';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feedback" component={FeedbackForm} />
      </Switch>
    </Router>
  );
};

export default App;