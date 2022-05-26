/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useAddTaskMutation } from "../../api/index";
import { TaskList } from "../task/TaskList";

export function BoardItem( {board} ) {
    const [ addTask ] = useAddTaskMutation()
    const [ inputVisible, setInputVisible ] = useState(false)
    // const [ renameInputVisible, setRenameInputVisible ] = useState(false)
    const [ taskName, setTaskName] = useState("")

    const handleSubmitCreateTask = async(e) => {
        e.preventDefault();
    
        if (taskName) {
          const task = {
            task_name: taskName,
            board_id: board.board_id,
            task_description: ""
          };
    
          addTask({ task });
        }
    
        setInputVisible(!inputVisible);
      }

    return (
        <div className="bg-black bg-opacity-50 w-64">
            <h5 onClick={() => alert()} className="text-2xl text-bold text-white p-5 w-full">{board.board_name}</h5>
            
            <TaskList board={board} />
            <div className="mt-3">
                <button style={{display: inputVisible && "none"}} className="btn w-full" type="submit" onClick={() => setInputVisible(!inputVisible)}>
                    Create task
                </button>
                <div style={{display: !inputVisible && "none"}}>
                    <form
                    className="flex flex-col"
                    onSubmit={handleSubmitCreateTask}
                    >
                        <input 
                            className="input w-full h-full" 
                            type="text"
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="New task"
                        />
                        <div className="flex flex-row">
                            <button
                                className="btn btn-success"
                                type="submit"
                            >
                                Add
                            </button>
                            <button
                                className="btn btn-error"
                                type="button"
                                onClick={() => setInputVisible(!inputVisible)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
