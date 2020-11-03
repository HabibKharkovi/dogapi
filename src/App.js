import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        <Footer />
    </div>
  );
}

export default App;
