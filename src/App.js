import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      {/* <Sidebar/>
      <MainDash/> */}
        <Topbar />
      </div>
    </div>
  );
}

export default App;