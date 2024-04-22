import "./homeProperties.scss"

function homeProperties(){
    return(
        <div className="homeProperties">
            <select name="Sort" id="Sort">
            <option value="Exclusive">SORT: EXCLUSIVE (DEFAULT)</option>
            <option value="Affordable">SORT: AFFORDABLE</option>
            <option value="Cheap">SORT: CHEAP</option>
            </select>
            
        <div className="homePropertiesP">
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House1.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House2.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House3.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House4.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House5.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House6.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House7.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House8.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            <div className="Property">
                <a href="">
                    <img src="./public\House img\House9.jpg" alt="House Image" />
                    <h2>Location</h2>
                    <h4>Price$$$</h4>
                    <p>Descripton: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </a>
            </div>
            
        </div>
        <div className="pageSelector">
            <button>&lt;</button>
            <button>Page</button>
            <button>&gt;</button>
        </div>
        
    </div>
    )
}

export default homeProperties;