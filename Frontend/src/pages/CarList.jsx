export default function CarList(){
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
                              <div className="grid grid-cols-5 odd:bg-gray-100 p-5 even:bg-white mb-6">
                                    <div  className="col-span-2">
                                          <h3 className="text-blue-600">Toyota FT 86</h3>
                                          <p>Toyora is the best</p>
                                    </div>
                                    <div className="col-span-2">
                                          <h3>Available Month</h3>
                                          <p>12 Month, 24 Month, 48 Month</p>
                                    </div>
                                    <button className="dangerbtn">Detail</button>
                              </div>
                              <div className="grid grid-cols-5 odd:bg-gray-100 p-5 even:bg-white mb-6 opacity-60">
                                    <div  className="col-span-2">
                                          <h3 className="text-blue-600">Toyota FT 86</h3>
                                          <p>Toyora is the best</p>
                                    </div>
                                    <div className="col-span-2">
                                          <h3>Available Month</h3>
                                          <p>12 Month, 24 Month, 48 Month</p>
                                    </div>
                                    <button className="goodbtn text-xs" disabled>Vanancies has been submited</button>
                              </div>
                        </div>
                  </div>
            </>
      )
}