import './App.css';

import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom"
import User from './components/User';
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import Select from './components/Select';

function App() {
  return (
    <Router>
      <div>
        <h2>Example App 2</h2>
        <nav>
          <ul>
            <li>
              <NavLink style={({ isActive }) => ({ activeClassName : isActive ? "active" :" "})} to = "/"  >Home</NavLink> {/*sayfa yenilenmez */}
            {/*<a href="/">Home</a> sayfa yenilenir*/}
            </li>
            <li>
              <NavLink style={({ isActive }) => ({ color: isActive ? "orange" : "pink" })} to = "/about">About</NavLink>
            </li>
            <li>
              <Link to = "/users">Users</Link>
            </li>
          </ul>
        </nav> 
        {/* A <Switch> look through its children <Route>s and 
          renders the first one that matches the current URL. */}
          
            {/* <Route path="/" exact component = {Home}>   İllede ilk bunu kullanmak istersek "exact"i eklememiz lazım yoksa nneye basılırsa basılsın hep Home'u girer */}
            {/* <Route path="/about" component = {About}/>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/user" component = {User}/>
          </Switch> */}

      <Routes>
        <Route path="*" element={<Error404 />}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}> {/* bunda outlet var ve bu her daim gözüküyor farkli linklere göre aşağidaki çocuklardan teki gözüküyor */}
          <Route index element={<Select />}/>
          <Route path=":id" element={<User />}/> {/* /users/:id */}
        </Route>
      </Routes>

       </div>
    </Router>
    
  );
}


export default App;
