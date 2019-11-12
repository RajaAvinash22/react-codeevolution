import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Shop from './components/Shop';
import About from './components/About';
import ItemDetail from './components/ItemDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import PostForm from './components/PostForm';
// import PostList from './components/PostList';

function App() {
  return (
    <Router >
      <div className="App">

        {/* Get data from API */}
        {/* <PostList /> */}
        {/* Post data to API */}
        {/* <PostForm /> */}

        {/* Routing in React */}
        <Nav />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>  
      </Router>    
      );
          }
          const Home = () => (
  <div>
        <h1>Home Page</h1>
      </div>
      );
      export default App;
