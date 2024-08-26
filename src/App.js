import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import BlogCreate from './pages/BlogCreate';
import BlogEdit from './pages/BlogEdit';
import HomePage from './pages/HomePage';
import BlogList from './pages/BlogList';

function App() {
  return(
    <>
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/blogs" exact>
            <BlogList />
          </Route>
          <Route path="/blogs/create" exact>
            <BlogCreate />
          </Route>
          <Route path="/blogs/edit" exact>
            <BlogEdit />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;