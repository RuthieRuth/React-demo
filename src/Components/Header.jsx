import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">

      <h1>
        <NavLink to="/">React demo App </NavLink>
      </h1>

      <nav>
        <ul>
          <li><NavLink to="/">List</NavLink></li>
          <li><NavLink to="about"> About</NavLink></li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;

/* there can be link and nav link
before :

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>React demo App</h1>
            <nav>
                <ul>
                    <li><Link to="home"/>Home</li>
                    <li><Link to="list"/>List</li>
                    <li><Link to="about"/> About </li> 
                </ul>
            </nav>
        </div>
    );
};

export default Header; */
