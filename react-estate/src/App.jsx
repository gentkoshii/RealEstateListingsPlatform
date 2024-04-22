import Navbar from "./Components/navbar/navbar";
import HomeProperties from "./HomeSection/homeProperties";
import HomeFooter from "./Components/homeFooter";

import "./layout.scss";

function App() {
    return (
        <div className="layout">
            <Navbar />
            <HomeProperties/>
            <HomeFooter />
        </div>
    )
}

export default App