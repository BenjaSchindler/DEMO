
import { useState } from "react";
import { apiurl } from "../Services/apiuwu";
import { getCookie, setCookie } from "../Services/CookiesHelper";



function loginUser(credentials) {
  return(
  apiurl.post('/login', credentials).then(({data})=>data)
)}

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState(false);
  
  const handleSubmit = e => {
    e.preventDefault();
    loginUser({
      username,
      password
    }).then((res)=>{ 
      console.log(res) 
      setCookie('token', res.token)
      window.location.href = '/Home'
    })
    .catch((r)=>{
      console.log(r)
      setFail(true)
    })
  }


  return(
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={e => setPassword(e.target.value)} />
          { fail?
            <p className="text-red-500 text-xs italic">Contraseña o Usuario Equivocado</p>:
            <p className="text-red-500 text-xs italic"></p>
          }
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  )  
}


