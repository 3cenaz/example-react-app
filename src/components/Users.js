import { useEffect, useState } from 'react'
import {Link, Routes, Route, useMatch,Outlet,useLocation,NavLink} from 'react-router-dom'
import axios from "axios"
import User from "./User"

function Users(){
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    // const slugText = (text) => {
    //     return text.toLowerCase().replace(/ /g, "-");
    //   };
    // const location = useLocation()

    //const {path, url} = useMatch() // /users

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .finally(() => setLoading(false))
    },[])    

    return (
      <div>
        <h2>Users</h2>
        {loading && <div>loading...</div>}
        <ul>
          {/* <li>
            <Link to="/user/1" >User 1</Link>
          </li>
          <li>
            <Link to="/user/2" >User 2</Link>
          </li>
          <li>
            <Link to="/user/3" >User 3</Link>
          </li> */}
          {
            // users.map((user) => (
            //     <li key = {user.id}>
            //     <Link to={`${url}/${user.id}`}> {user.name}</Link> 
            //   </li> 

            
            users.map((user) => (
                <li key = {user.id}>
                <Link to={`/users/${user.id}`}> {user.name}</Link> 
                {/* <NavLink  to={`/users/user/${slugText(user.name)}/${user.id}`} style={({isActive}) => ({color: isActive ? "red" : "pink"})}>{user.name}</NavLink> */}

              </li> 
            ))
          }
        </ul>
        <Outlet/>
        {/* <Routes>
        <Route  path={path} element= {<h3>Please select user</h3>} >
           
        </Route>
        <Route path={`${path}/:id`} element={<User />}/>
        </Routes> */}


      </div>
    )
  }

export default Users
