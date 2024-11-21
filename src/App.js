import "./App.css";
import Explore from "./components/Explore";
import Landing from "./components/Landing";
import Latest from "./components/Latest";
import Overview from "./components/Overview";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Landing />
      <Overview />
      <Explore />
      <Latest />
      <Top />
    </div>
  );
}

export default App;
