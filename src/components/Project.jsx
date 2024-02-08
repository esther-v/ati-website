const Project = ({ project, even }) => {
  return (
    <div className='project' style={ even ? { flexDirection: 'row-reverse' } : {}}>
      <img className="presentation-img" src={project.imgUrl} />
      <div className="project-details">
        <h4>{project.title}</h4>
        <h6>{project.subtitle}</h6>
        <p>{project.description}</p>
        <img className="description-img" src={project.imgDescriptionUrl} />
      </div>
    </div>
  )
}

export default Project