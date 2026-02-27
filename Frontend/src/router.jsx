import { createBrowserRouter } from "react-router-dom";
import DefaultUi from "./components/DefaultUi";
import GuestUi from "./components/GuestUi";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Validation from "./pages/Validation";
import CarList from "./pages/CarList";
import Details from "./pages/Details";

const router = createBrowserRouter([
      {
            path : '/',
            element : <DefaultUi/>,
            children : [
                  {
                        path : '/dashboard',
                        element : <Dashboard/>
                  },
                  {
                        path : '/validation',
                        element : <Validation/>
                  },
                  {
                        path : '/car',
                        element : <CarList/>
                  },
                  {
                        path : '/car/:id',
                        element : <Details/>
                  },
            ]
      },
      {
            path : '/',
            element : <GuestUi/>,
            children : [
                  {
                        path : "login",
                        element : <Login/>
                  }
            ]
      },
])

export default router