export default function Dashboard(){

      const validation = null
      const validated = 1
      const installment = 1

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
                                                      <td className="w-3xs">Accepted</td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Job</th>
                                                      <td className="w-3xs"> - </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Income/Month</th>
                                                      <td className="w-3xs"> - </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Validator</th>
                                                      <td className="w-3xs"> - </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Validator Notes</th>
                                                      <td className="w-3xs"> - </td>
                                                </tr>
                                          </table>
                                    </div>
                                    :
                                    <div className="border-2 p-4">
                                          <button>+ Request Validation</button>
                                    </div>
                              }
                        </div>
                        <div className="flex my-6">
                              <h2 className="text-gray-600 flex-3">My Installment Car</h2>
                              {
                                    installment ?
                                    ""
                                    :
                                    <button className="flex-1">+ Add Installment Cars</button>
                              }
                        </div>
                        {
                              installment ?
                              <div className="max-w-xl bg-white mb-8">
                              <div className="bg-gray-100 border-2 border-b-0 p-4">
                                    <h3>Car Name</h3>
                              </div>
                                    <div className="border-2">
                                          <table className="w-full">
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Desc</th>
                                                      <td className="w-sm">Accepted</td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Price</th>
                                                      <td className="w-sm"> - </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Installment</th>
                                                      <td className="w-sm"> - </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Apply Date</th>
                                                      <td className="w-sm"> - </td>
                                                </tr>
                                                <tr className="odd:bg-gray-200 even:bg-white">
                                                      <th className="p-3 text-left">Notes</th>
                                                      <td className="w-sm"> - </td>
                                                </tr>
                                          </table>
                                    </div>
                        </div>
                              :
                              validated ?
                              ""
                              :
                              <div className="w-full bg-yellow-100 text-yellow-900 p-4">Your validation must be approved by validator to Installment Cars</div>
                        }
                  </div>
            </>
      )
}