import { useGetBoardTasksQuery } from "../../api/index";
import { TaskItem } from "./TaskItem";

export function TaskList({ board }) {
  const { data } = useGetBoardTasksQuery(board.board_id);

  return (
    <div className="flex flex-col gap-5">
      {data?.map((task) => (
        <TaskItem key={task.task_id} task={task} />
      ))}
    </div>
  );
}
