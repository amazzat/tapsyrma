import { Link } from "react-router-dom";

export function ProjectItem({ project }) {
  return (
    <Link to="/board">
      <div className="bg-[#005b96] h-44 w-80 rounded">
        <h3 className="text-2xl font-bold text-zinc-100 pl-6 pt-8">{project.project_name}</h3>
      </div>
    </Link>
  );
}
