import "../App.css";
import { Keywords } from "../components/Keywords";
import { NavBar } from "../components/NavBar";
import { SideMenu } from "../components/SideMenu";
import { Home } from "./Home";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SideMenu />
      <Keywords />
      <Home />
    </div>
  );
};

export default App;
