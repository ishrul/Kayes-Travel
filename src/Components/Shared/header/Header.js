import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="company-title">
              <h3>
                Kayes<span>Travel</span>
              </h3>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  borderBottom: "2px solid blue",
                  transition: "0.5s",
                }}
                to="/home"
              >
                <Nav.Link href="#features">Home</Nav.Link>
              </NavLink>

              {user.email && (
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                    transition: "0.5s",
                  }}
                  to="/myOrders"
                >
                  <Nav.Link href="#features">My Orders</Nav.Link>
                </NavLink>
              )}
              {user.email && (
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                    transition: "0.5s",
                  }}
                  to="/manageAllOrders"
                >
                  <Nav.Link href="#features">Manage All Orders</Nav.Link>
                </NavLink>
              )}
              {user.email && (
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                    transition: "0.5s",
                  }}
                  to="/NewService"
                >
                  <Nav.Link href="#features">Add New Service</Nav.Link>
                </NavLink>
              )}
              {!user.email && (
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                    transition: "0.5s",
                  }}
                  to="/login"
                >
                  <Nav.Link href="#features">Login</Nav.Link>
                </NavLink>
              )}
              {user.email && (
                <button
                  className="btn-info text-white fw-bold rounded-3 ms-4"
                  onClick={logOut}
                >
                  LogOut
                </button>
              )}

              {user.email && (
                <Link to="">
                  <Nav.Link className="text-info fw-bold" href="#features">
                    {user.displayName}
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

/* <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    borderBottom: "2px solid blue",
                    transition: "0.5s",
                  }}
                  to="/login"
                >
                  <Nav.Link>Login</Nav.Link>
                </NavLink> 
                */

/* 
{!user.email ? (
                <li className="nav-item">
                  <Link to="/login">
                    <a className="nav-link" href="#">
                      LogIn
                    </a>
                  </Link>
                </li>
              ) : (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link to="/login">
                      <a className="nav-link" href="#">
                        MY Orders
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">
                      <a className="nav-link" href="#">
                        Manage All Orders
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">
                      <a className="nav-link" href="#">
                        Add New Service
                      </a>
                    </Link>
                  </li>
                  <li onClick={logOut} className="nav-item">
                    <button className="nav-link rounded fw-bold" href="#">
                      Logout
                    </button>
                  </li>
                </div>
              )}
*/
