import "./App.css";

//importing components
import ProfContainer from "./Components/prof-container"
import Navbar from "./Components/navbar"

function App() {
  return (
    
      <div className="App">
        {/* Navbar */}
        <Navbar/>
        {/* profile header */}
        <ProfContainer/>
      </div>
  );
}

export default App;
