import { useState } from "react";
import "./navbar.scss"

function Navbar(){
    const [open, setOpen] = useState(false)
    return(
            <nav>
                <div className="navLeft">
                    <img src="./public\Icons\logo.png" alt="Logo" />
                    <p>Real Estate</p>
                </div>
                <div className="navRight">
                    <div className="navPages">
                        <form>
                            <button>
                                <img src="./public\Icons\search-icon.png" alt="search" />
                            </button>
                            <input type="text" name="Search" placeholder="Search" />
                        </form>
                        <a href="">Properties</a>
                    </div>
                    <div className="navAuthorization">
                        <a>Login</a>
                        <a>Sign Up</a>
                    </div>
                    <div className="navbarIcon">
                        <img src="./public/Icons/menu2.png" alt="Hamburger-Menu" onClick={() => setOpen((prev)=> !prev)}/>
                    </div>
                    <div className={open ? "navbarMenu active" : "navbarMenu" }>
                        <a href="">Properties</a>
                        <a>Login</a>
                        <a>Sign Up</a>
                    </div>
                </div>
            </nav>
        )
    }

export default Navbar;