import { useState } from "react";
import Form from "./Form";
import Project from "./Project";
import Completed from "./Compeleted";
const Main = () => {
  const [allProjects, setAllProjects] = useState([]);

  const updateAllProjects = (newProject) => {
    setAllProjects((prev) => [...prev, newProject]);
  };
  const deleteProject = (projectId) =>
    setAllProjects(() =>
      allProjects.filter((allProjects) => allProjects.id !== projectId)
    );

  const projectCompleted = (projectId) => console.log("i am clicked");
  // setAllProjects(() =>
  //   allProjects.map((pro) => {
  //     pro.completed = pro.id === projectId && !pro.completed;
  //     console.log(pro.completed);
  //   })
  // );

  return (
    <div className="projects-container">
      {allProjects
        .filter((allProjects) => allProjects.completed)
        .map((complete) => (
          <Completed data={complete} key={complete.id} />
        ))}

      <div className="onGoing">
        <Form insertData={updateAllProjects} />
        {allProjects
          .filter((project) => project.warning)
          .map((project) => (
            <Project
              data={project}
              delete={deleteProject}
              key={project.id}
              complted={projectCompleted}
            />
          ))}
      </div>
      <div className="currentProject">
        <h3>Curent Projects</h3>
        {allProjects
          .filter((project) => !project.warning)
          .map((project) => (
            <Project
              data={project}
              delete={deleteProject}
              key={project.id}
              complted={projectCompleted}
            />
          ))}
      </div>
    </div>
  );
};
export default Main;
