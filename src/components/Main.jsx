import { useState } from "react";
import Form from "./Form";
import Project from "./Project";
const Main = () => {
  const [allProjects, setAllProjects] = useState([]);

  const updateAllProjects = (newProject) => {
    setAllProjects((prev) => [...prev, newProject]);
  };
  const deleteProject = (projectId) => {
    setAllProjects(() =>
      allProjects.filter((allProjects) => allProjects.id !== projectId)
    );
  };

  return (
    <div className="projects-container">
      <div className="closing-soon"></div>
      <div className="onGoing">
        <Form insertData={updateAllProjects} />
        {allProjects
          .filter((project) => project.warning)
          .map((project) => (
            <Project data={project} delete={deleteProject} key={project.id} />
          ))}
      </div>
      <div className="take-note">
        <h3>Curent Projects</h3>
        {allProjects
          .filter((project) => !project.warning)
          .map((project) => (
            <Project data={project} delete={deleteProject} key={project.id} />
          ))}
      </div>
    </div>
  );
};
export default Main;
