import { Outlet } from "react-router-dom";
import "../App.css";
import { NavBar } from "../components/NavBar";
import { SideMenu } from "../components/SideMenu";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default App;
