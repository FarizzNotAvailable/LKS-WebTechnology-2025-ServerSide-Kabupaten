import { Link, Outlet } from "react-router-dom";

export default function GuestUi(){
      return(
            <>
                  <header className=" bg-blue-600">
                        <div className=" bg-blue-600 max-w-5xl m-auto flex justify-between items-center text-white py-3">
                              <h2>Installment Car</h2>
                              <nav>
                                    <Link to={'/login'}>Login</Link>
                              </nav>
                        </div>
                  </header>
                  <main>
                        <Outlet/>
                  </main>
            </>
      )
}