import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  return (
    <StyledNavBar >
      ATI
      <div className="menu">
        <Link to="/">Accueil</Link>
        <Link to="/prestations">Prestations</Link>
        <Link to="/realisations">Réalisations</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </StyledNavBar >
  )
}

const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0.5rem 4rem;
  box-shadow: 0px 15px 10px -15px #111; 
  .menu {
    display: flex;
    gap: 4rem;
    a {
      text-decoration: none;
      font-size: 24px;
    }
  }
`

export default Navbar