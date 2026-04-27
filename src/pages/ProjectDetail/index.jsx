import { getProjectById } from "../../data/projects";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = getProjectById(parseInt(id));

  if (!project) {
    return (
      <div className="page">
        <div className="projet-not-found">
          <h1>Projet non trouvé 🙈</h1>
          <p>Le projet demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Retour à la liste
      </button>
      <div className="project-detail">
        <div className="project-detail-header">
          <div className="project-detail-info">
            <h1>{project.name}</h1>
            <div className="project-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="progress-text">{project.progress}%</span>
            </div>{" "}
            <p className="project-detail-department">{project.status}</p>
          </div>
        </div>

        <div className="project-detail-content">
          <section className="project-detail-section">
            <h2>Description</h2>
            <p>{project.description}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
