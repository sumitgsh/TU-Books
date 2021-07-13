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
import Schedule from './components/schedule/schedule';
import AdminLogin from './components/admin/login/login';
import AdminAddBook from './components/admin/addbook/addbook';

function App() {
  return(
    <div>
      <Router>
      <Switch>
            {/* Admin routes */}
            <Route exact path = "/admin/login">
                <AdminLogin />
            </Route>
            <Route exact path = "/admin/addbook">
                <AdminAddBook />
            </Route>
            {/* Client routes */}
            <Route exact path = "/">
              <div className='background'>
                <Navbar className="nav"/>
                <Search />
                <Topics />
                <Schedule/>
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
