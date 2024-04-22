import Navbar from "./Components/navbar/navbar";
import HomeProperties from "./HomeSection/homeProperties";
import "./layout.scss";

function App() {
    return (
        <div className="layout">
            <Navbar/>
            <HomeProperties/>
        </div>
    )
  }
  
  export default App