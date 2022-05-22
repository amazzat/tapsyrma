import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserProjectsQuery } from "../../api/index";
import { userSelector } from "../../store/auth/index";
import { CreateProjectModal } from "../modal/CreateProjectModal";
import { ProjectItem } from "./ProjectItem";

export function ProjectList() {
  const user = useSelector(userSelector);
  const { data } = useGetUserProjectsQuery(user.id);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      {data?.map((project) => (
        <ProjectItem key={project.project_id} project={project} />
      ))}

      <button
        className="btn-success"
        type="button"
        onClick={() => setModalVisible(true)}
      >
        Create project
      </button>
      <CreateProjectModal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}
