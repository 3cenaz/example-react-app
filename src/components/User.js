import { useEffect,useState } from 'react'
import {useParams, Link, useNavigate,Route,Routes} from 'react-router-dom'
import axios from 'axios'

function User(){
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        // setTimeout(() => {
        //     navigate("/users/")
        // },3000)

        axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
        .then((res) => setUser(res.data))
        .finally(setLoading(false))
    },[id])

    return <div>
        {/* <Routes>
        <Route path="/users/:" element= {<h3>Please select user</h3>} />

        <Route path="/users/:id" element={
            <div>
            <h2>User Detail</h2>
            {loading && <div>loading...</div>}
            {!loading && <code>{ JSON.stringify(user)}</code>}
            </div>
        }/>
        </Routes>  */}

        {/* {id = ":"  ? <div>
            <h2>User Detail</h2>
            {loading && <div>loading...</div>}
            {!loading && <code>{ JSON.stringify(user)}</code>}
            </div> 
            : <h3>Please select user</h3>} */}
        {/* {!loading &&  JSON.stringify(`Name: ${user.name  }    ////    UserName: ${user.username  } ////  E-mail: ${user.email  }   ////   Phone: ${user.phone} `) */}

        <h2>User Detail</h2>
            {loading && <div>loading...</div>}
            {!loading && <code>{ JSON.stringify(user)}</code>}
        

        <br></br><br></br>
        <Link to={`/users/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
    </div>
  }

export default User
