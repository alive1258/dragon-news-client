import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handelLogOut=()=>{
    logOut()
    .then()
    .catch(error=>console.log(error))
  }
  return (
    
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto ">
                <Link to="/catagory/0">Home</Link>

                <Link>About</Link>

                <Link>Career</Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button variant="secondary" onClick={handelLogOut}>Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
 
  );
};

export default NavigationBar;
