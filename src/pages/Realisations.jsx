import projects from '../data/projects.json'
import Project from '../components/Project'

const Realisations = () => {

  return (
    <div>
      Realisations
      {projects.map(project => {
        return project.id%2 === 1 
          ? <Project key={project.id} project={project} /> 
          : <Project key={project.id} project={project} even />
      })}
    </div>
  )
}

export default Realisations