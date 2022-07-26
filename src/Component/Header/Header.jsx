import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap'

import Logo from '../../assets/images/logo.png'
import "./Header.css"


const Header = () => {

  return (
    <>
      <div className='main_container_contact'
      >
        <div className='main_container_navbar'>
          <Navbar expand="lg"  sticky="top" className = "navbar">
            <Container>
              <Link to = "/">
                <img src={Logo} alt="logo" width="130px" height="130px" className = "nav-img"/>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto NavLink-all">
                  <Link to="home" className='NavLink' >Accessor's Home</Link>
                  <Link to="property" className='NavLink'>Property Inspection</Link>
                  <Link to="forms" className='NavLink'>Forms & Requests</Link>
                  <Link to="accessor" className='NavLink'>Accessor's Tools</Link>
                  <Link to="/" className='NavLink'>Contact Us</Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className='main_container_contact_content'>
          <div className='main_container_contact_content-subHeading'>
            <h3>CONTACT US</h3>
            <h1>Talk to the <span className='main_container_contact_content-subHeading-span'>Assessors' Office</span></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header