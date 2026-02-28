import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){

      const navigate = useNavigate('')
      const [id, setId] = useState('')
      const [password, setPassword] = useState('')

      const handlePassword = (e)=>{
            setPassword(e.target.value)
      }
      const handleId = (e)=>{
            setId(e.target.value)
      }

      const handleLogin = ()=>{
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/v1/auth/login',
                  data: {
                        "id_card_number" : id,
                        "password" : password,
                  }
            })
                  .then(response => {
                        localStorage.setItem("auth_token",response.data.Body.token)
                        alert('Login berhasil')
                        navigate('/dashboard')
                  })
                  .catch(error => {
                        console.log(error)
                        alert('ID Card Number or Password incorrect')
                  });
      }

      return(
            <div className="flex justify-center items-center h-[90vh]">
                  <div className="bg-white w-md rounded-sm overflow-hidden shadow-md">
                        <h2 className="text-center bg-blue-600 text-white p-5">Installment Car</h2>
                        <div className="flex flex-col p-4">
                              <label htmlFor="idcard">ID Card Number</label>
                              <input type="text" id="idcard" onChange={handleId} placeholder="Input ID Card Number" className="mb-5"/>
                              <label htmlFor="pw">Password</label>
                              <input type="password" id="pw" onChange={handlePassword} placeholder="Input ID Card Number" className="mb-5"/>
                              <div className="w-xs m-auto mb-4">
                                    <button onClick={handleLogin}>Login</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}