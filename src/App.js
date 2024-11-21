import "./App.css";
import Explore from "./components/Explore";
import Landing from "./components/Landing";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Landing />
      <Overview />
      <Explore />
    </div>
  );
}

export default App;
