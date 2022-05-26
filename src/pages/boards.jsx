import { useLocation } from "react-router-dom";
import { BoardList } from "../components/board/index";

export function Boards() {
  const location = useLocation()
  const { project } = location.state

  return (
    <div>
      <BoardList project={project} />
    </div>
  );
}
