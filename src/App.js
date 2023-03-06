import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import NavBar from './components/navbar';
import Home from './components/Home';
import About from './components/About';
import Trivia from './components/Trivia';


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/trivia' element={<Trivia/>}/>
          <Route path='*' element={<Home/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
