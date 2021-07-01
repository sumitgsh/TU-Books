import Home from './components/home/home';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';
import About from './components/about/about';


function App() {
  return(
    <div>
      <Router>
      <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route exact path = "/books">

            </Route>
            <Route exact path = "/about">
                <About/>
            </Route>
        </Switch>
    </Router> 
    </div>
  )
}

export default App;
