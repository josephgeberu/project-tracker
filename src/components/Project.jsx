import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faFileEdit,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  const deleteProject = () => props.delete(props.data.id);
  const toggelComplete = () => props.complted(props.data.id);

  return (
    <div className="project-item">
      <div className="project-top-content">
        <h2>{props.data.titel}</h2>
        <div className="project-button">
          <div className="projectAction" onClick={deleteProject}>
            <FontAwesomeIcon icon={faTrash} values="kljl" />
            <p>Delete</p>
          </div>
          <div className="projectAction">
            <FontAwesomeIcon icon={faFileEdit} />
            <p>Edite</p>
          </div>
          <div className="projectAction" onClick={toggelComplete}>
            <FontAwesomeIcon icon={faCircleCheck} />
            <p>Check</p>
          </div>
        </div>
      </div>
      <div className="dates">
        <div>
          <p className="boldeDate">Started-Date</p>
          <p>{props.data.open}</p>
        </div>
        <div>
          <p className="boldeDate">Close-Date</p>
          <p>{props.data.close} </p>
        </div>
        <div>
          <p className="boldeDate">Left </p>
          <p className={props.data.left < 15 && "warningColor"}>
            {props.data.left}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
