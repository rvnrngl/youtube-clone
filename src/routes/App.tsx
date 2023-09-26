import { Outlet, useLocation } from "react-router-dom";
import "../App.css";
import { NavBar } from "../components/NavBar";
import { SideMenu } from "../components/SideMenu";

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="App">
      <NavBar />
      {path === "/watch" ? "" : <SideMenu />}
      <Outlet />
    </div>
  );
};

export default App;
