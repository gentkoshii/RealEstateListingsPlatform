import Navbar from "./Components/navbar/navbar";
import HomeSection from "./HomeSection/homeSection";
import HomeProperties from "./HomeSection/homeProperties";
import HomeHelp from "./HomeSection/homeHelp";
import HomeFooter from "./Components/homeFooter";

import "./layout.scss";

function App() {
    return (
        <div className="layout">
            <Navbar />
            <HomeSection />
            <HomeProperties/>
            <HomeHelp />
            <HomeFooter />
        </div>
    )
}

export default App
