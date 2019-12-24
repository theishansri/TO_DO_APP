import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./Components/TodoList.component"
import EditTodo from "./Components/Edit.component";
import CreateTodo from "./Components/Create.component"
import logo from "./logo.png"
function App() {
  return (
    <div>

      <div className="container">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" target="_blank"><img src={logo} width="30" height="30" alt="coding" /></Link>
            <Link to="/" className="navbar-brand">MERN stack-To DO App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">CreateTodos</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path='/' component={TodoList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </Router>
      </div>

    </div>
  );
}

export default App;
