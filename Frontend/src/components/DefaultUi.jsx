import { Link, Outlet } from "react-router-dom";

export default function DefaultUi(){
      return(
            <>
                  <header className=" bg-blue-600">
                        <div className=" bg-blue-600 max-w-5xl m-auto flex justify-between items-center text-white py-3">
                              <h2>Installment Car</h2>
                              <nav className="flex gap-3">
                                    <a>John Skyrim</a>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                    <Link to={'/logout'}>Logout</Link>
                              </nav>
                        </div>
                  </header>
                  <main>
                        <Outlet/>
                  </main>
            </>
      )
}