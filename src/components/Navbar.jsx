import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav'>
      ATI
      <div className="menu">
        <Link to="/">Accueil</Link>
        <Link to="/prestations">Prestations</Link>
        <Link to="/realisations">Réalisations</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar