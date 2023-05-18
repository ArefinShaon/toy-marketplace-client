import { Link } from "react-router-dom";
import logo from '../../assets/toyman_d3aab1e4-a273-4b68-a0c8-9b6f6e6282c2_190x.png'
import { useContext } from "react";
import { AuthContext } from "../../Pages/Context/AuthProvider";

import { FaUser,  } from "react-icons/fa";

const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() =>{})
        .catch( error => console.log(error))
    }

    const navItems = (
        <>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/all-toy">All Toys</Link></li>
          {user?.email ? (
            <>
              <li><Link to="/add-toy">Add Toys</Link></li>
              <li><Link to="/my-toy">My Toys</Link></li>
                    <li><button onClick={handleLogOut}>Log out</button></li>
                    <li className="nav-item-user">
                
                <span className="tooltip">
                {user.photoURL ? (
                  <img
                    className="rounded-full w-12 mx-2"
                    src={user.photoURL}
                    alt=""
                    title={user.displayName}
                  />
                ) : (
                  <FaUser className="rounded-full w-12 mx-2" />
                )}
              </span>
                
              </li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </>
      );
    return (
        <div className="navbar fixed top-0 z-50 bg-cyan-100 mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="w-64  ">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-error">Place Order</button>
            </div>
        </div>
    );
};

export default NavBar;