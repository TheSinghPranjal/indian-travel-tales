import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <>
            <div className="nav font-face-ta " >
                <div style={{ paddingLeft: '20px' }}>
                    Indian Travel Tales
                </div>
                <nav className="navbar">
                    <ul className="nav-links font-face-gm">
                        <li className={location.pathname === "/" ? "nav-item selected" : "nav-item"}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={location.pathname === "/tours" ? "nav-item selected" : "nav-item"}>
                            <Link to="/tours">Tours</Link>
                        </li>
                        <li className={location.pathname === "/contacts" ? "nav-item selected" : "nav-item"}>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                        <li className={location.pathname === "/about" ? "nav-item selected" : "nav-item"}>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </>

    );
}

export default Navbar;

// import React from 'react';
// import { Link, useLocation, Location } from 'react-router-dom';
// import './Navbar.css';

// const Navbar: React.FC = () => {
//     const location: Location = useLocation();

//     return (
//         <>
//             <div className="nav font-face-ta">
//                 <div style={{ paddingLeft: '20px' }}>
//                     Indian Travel Tales
//                 </div>
//                 <nav className="navbar">
//                     <ul className="nav-links font-face-gm">
//                         <li className={location.pathname === "/" ? "nav-item selected" : "nav-item"}>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li className={location.pathname === "/tours" ? "nav-item selected" : "nav-item"}>
//                             <Link to="/tours">Tours</Link>
//                         </li>
//                         <li className={location.pathname === "/contacts" ? "nav-item selected" : "nav-item"}>
//                             <Link to="/contacts">Contacts</Link>
//                         </li>
//                         <li className={location.pathname === "/about" ? "nav-item selected" : "nav-item"}>
//                             <Link to="/about">About Us</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     );
// }

// export default Navbar;




