import Navbar from "./Components/navbar/navbar";
import HomeFooter from "./Components/homeFooter";

import "./layout.scss";

function App() {
    return (
        <div className="layout">
            <Navbar />
            <HomeFooter />
        </div>
    )
}

export default App