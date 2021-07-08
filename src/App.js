import React from 'react';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Search from './components/search/search';
import Topics from './components/topics/topics';
import Books from './components/books/books';
import Suggestion from './components/suggestion/suggestion';
import Footer from './components/footer/footer';
import About from './components/about/about';

function App() {
  return(
    <div>
      <Router>
      <Switch>
            <Route exact path = "/">
              <div className='background'>
                <Navbar />
                <Search />
                <Topics />
                <Suggestion />
                <Footer />
              </div>
            </Route>
            <Route exact path = "/books">
              <div className='background'>
                  <Navbar />
                  <Books />
                  <Footer />
              </div>
            </Route>
            <Route exact path = "/about">
              <div className='background'>
                  <Navbar />
                  <About />
                  <Footer />
              </div>
            </Route>
        </Switch>
    </Router> 
    </div>
  )
}

export default App;
