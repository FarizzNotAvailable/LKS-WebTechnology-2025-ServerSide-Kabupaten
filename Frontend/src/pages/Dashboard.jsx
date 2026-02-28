import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard(){
      const [validation, setValidation] = useState('')
      const [installment, setInstallment] = useState('')


      const navigate = useNavigate()
      const token = localStorage.getItem('auth_token')


      useEffect(()=>{
                  axios({
                        method: 'get',
                        url: 'http://localhost:8000/api/v1/validation',
                        headers:{
                              'Authorization' : "Bearer "+token
                        }
                  })
                        .then(response => setValidation(response.data.Body))
                        .catch(error => console.log(error));
                  axios({
                        method: 'get',
                        url: 'http://localhost:8000/api/v1/application',
                        headers:{
                              'Authorization' : "Bearer "+token
                        }
                  })
                        .then(response => setInstallment(response.data.Body.installment))
                        .catch(error => console.log(error));
      },[token])

      return(
            <>
                  <div className="bg-gray-100 py-24">
                        <div className="max-w-5xl m-auto">
                              <h1>Dashboard</h1>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto">
                        <h2 className="text-gray-600 my-4">My Data Validation</h2>
                        <div className="max-w-md bg-white mb-8">
                              <div className="bg-gray-100 border-2 border-b-0 p-4">
                                    <h3>Data Validation</h3>
                              </div>
                              {
                                    validation ?
                                    <div className="border-2">
                                          <table className="w-full">
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Status</th>
                                                      {
                                                            validation.status == "pending"?
                                                            <td className="w-3xs"><span className="bg-blue-600 text-white p-1 rounded-sm text-sm">pending</span></td>
                                                            :
                                                            validation.status == "accepted"?
                                                            <td className="w-3xs"><span className="bg-green-600 text-white p-1 rounded-sm text-sm">accepted</span></td>
                                                            :
                                                            <td className="w-3xs"><span className="bg-red-600 text-white p-1 rounded-sm text-sm">rejected</span></td>
                                                      }
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Job</th>
                                                      <td className="w-3xs"> {validation.job} </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Income/Month</th>
                                                      <td className="w-3xs"> Rp. {validation.income} </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Validator</th>
                                                      <td className="w-3xs"> {validation.validator?
                                                                  validation.validator
                                                                  :
                                                                  "-"
                                                            } </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Validator Notes</th>
                                                      <td className="w-3xs"> {validation.validator_notes ?
                                                                  validation.validator_notes
                                                                  :
                                                                  "-"
                                                      } </td>
                                                </tr>
                                          </table>
                                    </div>
                                    :
                                    <div className="border-2 p-4">
                                          <button onClick={()=>{navigate('/validation')}}>+ Request Validation</button>
                                    </div>
                              }
                        </div>
                        <div className="flex my-6">
                              <h2 className="text-gray-600 flex-3">My Installment Car</h2>
                              {
                                    installment ?
                                    ""
                                    :
                                    validation ?
                                    <button className="flex-1" onClick={()=>{navigate('/car')}}>+ Add Installment Cars</button>
                                    :
                                    ""
                              }
                        </div>
                        {
                              installment ?
                              <div className="max-w-xl bg-white mb-8">
                              <div className="bg-gray-100 border-2 border-b-0 p-4">
                                    <h3>{installment.car}</h3>
                              </div>
                                    <div className="border-2">
                                          <table className="w-full">
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Desc</th>
                                                      <td className="w-sm">{installment.description}</td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Price</th>
                                                      <td className="w-sm"> Rp. {Number(installment.price).toLocaleString('id-ID')} </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Installment</th>
                                                      <td className="w-sm flex py-3 gap-2"> {installment.application.month} Months
                                                            {
                                                            installment.application.apply_status == "pending"?
                                                            <td className="w-3xs"><span className="bg-blue-600 text-white p-1 rounded-sm text-sm">pending</span></td>
                                                            :
                                                            installment.application.apply_status == "accepted"?
                                                            <td className="w-3xs"><span className="bg-green-600 text-white p-1 rounded-sm text-sm">accepted</span></td>
                                                            :
                                                            <td className="w-3xs"><span className="bg-red-600 text-white p-1 rounded-sm text-sm">rejected</span></td>
                                                            }
                                                      </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Apply Date</th>
                                                      <td className="w-sm"> {installment.application.date} </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Notes</th>
                                                      <td className="w-sm"> {installment.application.notes} </td>
                                                </tr>
                                          </table>
                                    </div>
                        </div>
                              :
                              validation.status == "accepted" ?
                              ""
                              :
                              <div className="w-full bg-yellow-100 text-yellow-900 p-4">Your validation must be approved by validator to Installment Cars</div>
                        }
                  </div>
            </>
      )
}