import "./App.css";
import MainDash from "./pages/home/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Topbar />
        <div className="container">
          <Sidebar />
          <MainDash />
        </div>
      </div>
    </div>
  );
}

export default App;
