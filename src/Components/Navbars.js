import React from "react";
import globe from "../globe.svg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Dropdown from "react-bootstrap/Dropdown";
// import { NavItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { NavItem } from "react-bootstrap";
import mainimage from "../images.png";
const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}><img src={mainimage} className="logo-s"></img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Digital Practices" id="basic-nav-dropdown">
              <NavDropdown.Item>Cloud Engineering</NavDropdown.Item>
              <NavDropdown.Item>Data, Analytics & AI/ML</NavDropdown.Item>
              <NavDropdown.Item>Experience Design</NavDropdown.Item>
              <NavDropdown.Item>Intelligence Engineering</NavDropdown.Item>
              <NavDropdown.Item>Salesforce</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Industries & CoE" id="basic-nav-dropdown">
              <NavDropdown.Item>Financial Services</NavDropdown.Item>
              <NavDropdown.Item>Manufacturing & Transportation</NavDropdown.Item>
              <NavDropdown.Item>Media, Entertainment & Education</NavDropdown.Item>
              <NavDropdown.Item>Technology & ISVs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Partners" id="basic-nav-dropdown">
              <NavDropdown.Item>AWS</NavDropdown.Item>
              <NavDropdown.Item>Microsoft Azure</NavDropdown.Item>
              <NavDropdown.Item>Confluent</NavDropdown.Item>
              <NavDropdown.Item>Salesforce</NavDropdown.Item>
              <NavDropdown.Item>Snowflake</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Insights" id="basic-nav-dropdown">
              <NavDropdown.Item>Case Studies</NavDropdown.Item>
              <NavDropdown.Item>Thought Leadership</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item>Leadership</NavDropdown.Item>
              <NavDropdown.Item>Locations</NavDropdown.Item>
              <NavDropdown.Item>Engineering Culture</NavDropdown.Item>
              <NavDropdown.Item>News, Press Releases and Events</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Carrers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={globe}
              width="20"
              height="20"
              className="d-inline-block align-center"
            />{" "}
            Global
          </Navbar.Brand>
          <Button variant="primary" className="cta-talk blue-btn">
            LET"S TALK
          </Button>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export const DigitalPractices = () => {
//   <></>;
// };

export default Navbars;
