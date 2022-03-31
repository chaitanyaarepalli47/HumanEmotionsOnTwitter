import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
