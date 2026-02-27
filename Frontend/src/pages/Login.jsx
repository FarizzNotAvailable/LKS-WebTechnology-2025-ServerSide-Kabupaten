export default function Login(){
      return(
            <div className="flex justify-center items-center h-[90vh]">
                  <div className="bg-white w-md rounded-sm overflow-hidden shadow-md">
                        <h2 className="text-center bg-blue-600 text-white p-5">Installment Car</h2>
                        <div className="flex flex-col p-4">
                              <label htmlFor="idcard">ID Card Number</label>
                              <input type="text" id="idcard" placeholder="Input ID Card Number" className="mb-5"/>
                              <label htmlFor="pw">Password</label>
                              <input type="password" id="pw" placeholder="Input ID Card Number" className="mb-5"/>
                              <div className="w-xs m-auto mb-4">
                                    <button>Login</button>
                              </div>
                        </div>
                  </div>
            </div>
      )
}