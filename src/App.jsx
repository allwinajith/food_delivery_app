import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useOutletContext,
  Outlet,
} from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.css";
import Help from "./components/Help";
import Login from "./components/Login";
import Offers from "./components/Offers";
import ErrorBoundaries from "./components/ErrorBoundary";
import Cart from "./components/Cart";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-wrapper">
      <Header setSearchTerm={setSearchTerm} />
      <div
        className="outlet-container"
        style={{  backgroundColor: 'rgb(243 238 233 / 41%)', padding: '40px', flex: '1' }}>
        <Outlet context={{ searchTerm }} />
      </div>
      <Footer />
    </div>
  );
}

function BodyWrapper() {
  let { searchTerm } = useOutletContext();
  return <Body searchTerm={searchTerm} />;
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyWrapper />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorBoundaries />,
  },
]);

export default function AppWithRouter() {
  return <RouterProvider router={router} />;
}
