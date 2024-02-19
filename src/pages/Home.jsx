import HomeDemo from '../assets/homepage-kitchen.jpg'
import Card from '../components/Card'
import styled from 'styled-components'

const Home = () => {
  return (
    <StyledHome>
        <img className='home-img' src={HomeDemo} />
      <div className="about">
        <h1>Qui sommes-nous ?</h1>
        <p>Avec une expertise de plus 20 ans dans les métiers du bâtiment, notre équipe est capable de réaliser tous types de prestations dans le cadre de la rénovation de votre appartement ou maison.</p>
        <div className="services">
          <Card title={"Peinture"} />
          <Card title={"Parquet"} />
          <Card title={"Démolition"} />
        </div>
        <div className="div realisations">
          <p>De nombreuses rénovations déjà réalisées chez nos clients</p>
          <button>Voir nos réalisations</button>
        </div>
      </div>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  margin-top: 2rem;
`

export default Home