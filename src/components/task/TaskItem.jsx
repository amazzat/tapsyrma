export function TaskItem({ task }) {
  return (
    <div className=" text-bold w-full bg-white p-10 text-xl">
      {task.task_name}
    </div>
  );
}
