import "./App.scss";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/project/Project";
import Portfolio from "./pages/portfolio/Portfolio";

import { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const Root = () => (
    <>
      <Navbar showMenu={showMenu} onShowMenu={setShowMenu} />
      {!showMenu && (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
