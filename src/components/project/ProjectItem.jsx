import { Link } from "react-router-dom";

export function ProjectItem({ project }) {
  return (
    <Link
      to={`/projects/${project.project_id}`}
      state={{ project }}
      className="link"
    >
      <div className="h-44 w-80 rounded bg-[#005b96]">
        <h3 className="pl-6 pt-8 text-2xl font-bold text-zinc-100">
          {project.project_name}
        </h3>
      </div>
    </Link>
  );
}
