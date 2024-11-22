import "./App.css";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Latest from "./components/Latest";
import Overview from "./components/Overview";
import Register from "./components/Register";
import Steps from "./components/Steps";
import Top from "./components/Top";

function App() {
  return (
    <div className="App">
      <Landing />
      <Overview />
      <Explore />
      <Latest />
      <Top />
      <Steps />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
