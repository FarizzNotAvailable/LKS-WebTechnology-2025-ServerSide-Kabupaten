import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Validation(){

      const navigate = useNavigate()
      const token = localStorage.getItem('auth_token')

      const [form, setForm] = useState({
            job:"",
            job_description:"",
            income:0,
            reason_accepted:"",
      })

      const handleForm = (e)=>{
            const {name, value} = e.target
            setForm(f=>({...f, [name]:value}))
      }

      const handleSubmit = ()=>{
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/v1/validation',
                  headers:{
                              'Authorization' : "Bearer "+token
                  },
                  data: {
                        "job" : form.job,
                        "job_description" : form.job_description,
                        "income" : form.income,
                        "reason_accepted" : form.reason_accepted,
                  }
            })
                  .then(response => {
                        response
                        alert('Request data validation successful')
                        navigate('/dashboard')
                  })
                  .catch(error => {
                        console.log(error)
                        alert('Error code ???')
                  });
      }
      return(
            <>
                  <div className="bg-gray-100 py-24">
                        <div className="max-w-5xl m-auto">
                              <h1>Request Data Validation</h1>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto py-6">
                        <label htmlFor="work">Are you working?</label>
                        <select id="work">
                              <option value="yes">Yes, I am</option>
                              <option value="yes">Nu uh</option>
                        </select>
                        <div className="flex flex-col max-w-lg gap-3 my-6">
                              <input type="text" placeholder="Your Job" name="job" onChange={handleForm}/> 
                              <textarea placeholder="Describe what you do in your job" name="job_description" onChange={handleForm}></textarea>
                              <input type="number" placeholder="Income (Rp.)" name="income" onChange={handleForm}/> 
                        </div>
                        <label htmlFor="work">Reason Accepted?</label>
                        <div className="flex flex-col my-6">
                              <textarea placeholder="Explain why you should be accepted" name="reason_accepted" onChange={handleForm}></textarea>
                        </div>
                        <div className="w-40">
                              <button onClick={handleSubmit}>Send Request</button>
                        </div>
                  </div>
            </>
      )
}