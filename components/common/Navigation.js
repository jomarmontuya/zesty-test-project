import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigation = ({ home, about, faq }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <span className="fw-bold text-theme-color-primary fs-2">
            Zesty.io
          </span>
        </Navbar.Brand>
        <Nav className="mr-auto d-flex gap-2">
          <Nav.Link href="/">
            <NavLink active={home}>Home</NavLink>
          </Nav.Link>
          <Nav.Link href="/about">
            <NavLink active={about}>About</NavLink>
          </Nav.Link>
          <Nav.Link href="/faq">
            <NavLink active={faq}>Faq</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation

import styled from 'styled-components'

const NavLink = styled.span`
  text-transform: uppercase;
  ${(props) =>
    props.active &&
    `
  background-color: #F26A2E;
  border-radius: 5px; 
  color: #fff;
  padding: 0.5rem 1rem;
   `}
`
