import { useSelector } from "react-redux";
import { useState } from "react";
import { useAddProjectMutation } from "../../api/index";
import { userSelector } from "../../store/auth/index";

export function CreateProjectModal({ show, onHide }) {
  const user = useSelector(userSelector);
  const [projectName, setProjectName] = useState("");
  const [addProject] = useAddProjectMutation();

  const handleCreateProject = async (e) => {
    e.preventDefault();

    if (projectName) {
      const project = {
        project_name: projectName,
        owner_id: user.id
      };

      addProject({ project });
    }
  };

  return (
    <div>
      {show && (
        <div>
          <input type="text" onChange={(e) => setProjectName(e.target.value)} />
          <button type="submit" onClick={handleCreateProject}>
            Create project
          </button>
          <button type="button" onClick={onHide}>
            Hide
          </button>
        </div>
      )}
    </div>
  );
}
