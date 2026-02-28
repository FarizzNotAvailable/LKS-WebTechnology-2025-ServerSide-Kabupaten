import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarList(){

      const navigate = useNavigate()
      const [datas, setData] = useState([])
      
      const token = localStorage.getItem('auth_token')
      useEffect(()=>{
                  axios({
                        method: 'get',
                        url: 'http://localhost:8000/api/v1/installment_cars',
                        headers:{
                              'Authorization' : "Bearer "+token
                        }
                  })
                        .then(response => setData(response.data.Body.cars))
                        .catch(error => console.log(error));
      },[token])

      return(
            <>
                  <div className="bg-gray-100 py-24">
                        <div className="max-w-5xl m-auto">
                              <h1>Cars</h1>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto py-6">
                        <h2 className="text-gray-600">List of Cars</h2>
                        <div className="p-6">
                              {
                                    datas ?
                                    datas.map((data)=>(
                                          <div className="grid grid-cols-5 odd:bg-gray-100 p-5 even:bg-white mb-6">
                                                <div  className="col-span-2">
                                                      <h3 className="text-blue-600">{data.car}</h3>
                                                      <p>{data.description}</p>
                                                </div>
                                                <div className="col-span-2">
                                                      <h3>Available Month</h3>
                                                      <p>{
                                                            data.available_month.map((month)=>(
                                                                  month.month + " Months, "
                                                            ))
                                                      }</p>
                                                </div>
                                                {
                                                      data.id >1 ?
                                                      <button className="goodbtn text-xs" disabled>Vanancies has been submited</button>
                                                      :
                                                      <button className="dangerbtn" onClick={()=>{navigate(""+data.id)}}>Detail</button>
                                                }
                                          </div>
                                    ))
                                    :
                                    ""
                              }
                        </div>
                  </div>
            </>
      )
}