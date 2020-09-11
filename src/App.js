import React from 'react';
import '../src/styles/global.sass';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
