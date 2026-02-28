import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DefaultUi(){
      const navigate = useNavigate('/')
      const token = localStorage.getItem('auth_token')
      const [name, setName] = useState('')
      useEffect(()=>{
            if(!token){
                  navigate('/login')
            }else{
                  axios({
                        method: 'get',
                        url: 'http://localhost:8000/api/v1/user',
                        headers:{
                              'Authorization' : "Bearer "+token
                        }
                  })
                        .then(response => setName(response.data.Body.name))
                        .catch(error => console.log(error));
            }
      },[token, navigate])

      const logout = ()=>{
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/v1/auth/logout',
                  headers:{
                              'Authorization' : "Bearer "+token
                        }
            })
                  .then(response => {
                        localStorage.removeItem('auth_token')
                        response
                        alert('Logout Success')
                        navigate('/login')
                  })
                  .catch(error => {
                        console.log(error)
                        alert('ID Card Number or Password incorrect')
                  });
      }

      return(
            <>
                  <header className=" bg-blue-600">
                        <div className=" bg-blue-600 max-w-5xl m-auto flex justify-between items-center text-white py-3">
                              <h2>Installment Car</h2>
                              <nav className="flex gap-3">
                                    <a>{name}</a>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                    <Link onClick={logout} to={'/dashboard'}>Logout</Link>
                              </nav>
                        </div>
                  </header>
                  <main>
                        <Outlet/>
                  </main>
            </>
      )
}