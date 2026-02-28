import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Details(){

      const id = useParams()
      const token = localStorage.getItem('auth_token')
      const navigate = useNavigate()
      const [data, setData] = useState([])

      const [form, setForm] = useState({
            'installment_id':id.id,
            'month':'1',
            'notes':'',
      })

      const handleForm= (e)=>{
            const {name, value} = e.target
            setForm(f=>({...f, [name]:value}))
      }

      const handleSubmit = ()=>{
            axios({
                  method: 'post',
                  url: 'http://localhost:8000/api/v1/applications',
                  headers:{
                              'Authorization' : "Bearer "+token
                  },
                  data: {
                        'installment_id':form.installment_id,
                        'month':form.month,
                        'notes':form.notes,
                  }
            })
                  .then(response => {
                        response
                        alert('Applying installment successfull   ')
                        navigate('/dashboard')
                  })
                  .catch(error => {
                        console.log(error)
                        alert('Error code ???')
                  });
      }

      useEffect(()=>{
                  axios({
                        method: 'get',
                        url: 'http://localhost:8000/api/v1/installment_cars/'+id.id,
                        headers:{
                              'Authorization' : "Bearer "+token
                        }
                  })
                        .then(response => setData(response.data.Body.installment))
                        .catch(error => console.log(error));
      },[token, id.id])
      return(
            <>
                  {
                        data ?
                        <>
                              <div className="bg-gray-100 py-24">
                                    <div className="max-w-5xl m-auto text-center">
                                          <h1>{data.car}</h1>
                                          <p>Brand : {data.brand}</p>
                                    </div>
                              </div>
                              <div className="max-w-5xl m-auto py-6">
                                    <h2 className="mb-2">Description</h2>
                                    <p className="mb-2">{data.description}</p>
                                    <h2 className="mb-4">Price : <span className="text-sm bg-blue-600 p-1 text-white rounded-sm">Rp. {Number(data.price).toLocaleString('id-ID')}</span></h2>
                                    <h2 className="mb-2">Select Months</h2>
                                    <select className="w-full mb-2" name="month" onChange={handleForm}>
                                          <option selected hidden>Select Month</option>
                                          {
                                                data.available_month ?
                                                      data.available_month.map((month)=>(
                                                            <option value={month.month}>{month.month} Months</option>
                                                      ))
                                                :
                                                ""
                                          }
                                    </select>
                                    <h2 className="mb-2">Nominal/Month : <span className="text-sm bg-blue-600 p-1 text-white rounded-sm">Rp. {Number(data.price/form.month).toLocaleString('id-ID')}</span></h2>
                                    <h5 className="mb-2">Notes</h5>
                                    <textarea className="mb-4" placeholder="Explain why your installment should be accepted" name="notes" onChange={handleForm}></textarea>
                                    <div className="w-40">
                                          <button onClick={handleSubmit}>Apply</button>
                                    </div>
                              </div>
                        </>
                        :
                        ""
                  }
            </>
      )
}