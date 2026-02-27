export default function Details(){
      return(
            <>
                  <div className="bg-gray-100 py-24">
                        <div className="max-w-5xl m-auto text-center">
                              <h1>Toyota FT 86</h1>
                              <p>Brand : Toyota</p>
                        </div>
                  </div>
                  <div className="max-w-5xl m-auto py-6">
                        <h2 className="mb-2">Description</h2>
                        <p className="mb-2">Toyota FT 96 car is the best</p>
                        <h2 className="mb-4">Price : <span className="text-sm bg-blue-600 p-1 text-white rounded-sm">Rp. 900.000.000</span></h2>
                        <h2 className="mb-2">Select Months</h2>
                        <select className="w-full mb-2">
                              <option value="1">12 Month</option>
                              <option value="2">24 Month</option>
                        </select>
                        <h2 className="mb-2">Nominal/Month : <span className="text-sm bg-blue-600 p-1 text-white rounded-sm">Rp. 10.000.000</span></h2>
                        <h5 className="mb-2">Notes</h5>
                        <textarea className="mb-4" placeholder="Explain why your installment should be accepted"></textarea>
                        <div className="w-40">
                              <button>Apply</button>
                        </div>
                  </div>
            </>
      )
}