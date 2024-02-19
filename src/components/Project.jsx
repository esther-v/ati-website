import styled from "styled-components"

const Project = ({ project, even }) => {
  return (
    <StyledProject style={ even ? { flexDirection: 'row-reverse' } : {}}>
      <img src={project.imgUrl} />
      <div className="project-details">
        <h4>{project.title}</h4>
        <h6>{project.subtitle}</h6>
        <p>{project.description}</p>
        <img className="description-img" src={project.imgDescriptionUrl} />
        <button className="button">En savoir plus</button>
      </div>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0;
  img{
    width: 500px;
    height: 300px;
    object-fit: cover;
  }
  .project-details{
    border-top: 2px solid gray;
    img{
      width: 150px;
      height: 80px;
      object-fit: cover;
    }
  }
`

export default Project