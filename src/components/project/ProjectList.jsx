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
    <div className="p-20">
      <h2 className="text-center text-5xl text-zinc-100">Projects</h2>

      <div className="grid grid-cols-4 gap-10 p-10">
        <button
          className="btn btn-success h-44 w-80 rounded text-2xl"
          type="button"
          onClick={() => setModalVisible(true)}
        >
          + Create project
        </button>

        {data?.map((project) => (
          <ProjectItem key={project.project_id} project={project} />
        ))}
      </div>

      <CreateProjectModal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}
