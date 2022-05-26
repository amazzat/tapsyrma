/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { BoardItem } from "./BoardItem";
import { useAddBoardMutation, useGetProjectBoardsQuery } from "../../api/index";


export function BoardList( {project} ) {
  const { data } = useGetProjectBoardsQuery(project.project_id)
  const [addBoard] = useAddBoardMutation();
  const [ inputVisible, setInputVisible ] = useState(false)
  const [ boardName, setBoardName] = useState("")

  const handleSubmitCreateBoard = async(e) => {
    e.preventDefault();

    if (boardName) {
      const board = {
        board_name: boardName,
        project_id: project.project_id
      };

      addBoard({ board });
    }

    setInputVisible(!inputVisible);
  }


  return (
    <div className=" grid grid-flow-col auto-cols-max gap-6 m-10 rounded">
      {data?.map((board) => (
        <BoardItem key={board.board_id} board={board} />
      ))}
      <div className="w-40">
        {inputVisible ?
          <div
          >
            <form 
              className="flex flex-column"
              onSubmit={handleSubmitCreateBoard}
            >
                <input 
                  className="input w-full h-full" 
                  type="text"
                  onChange={(e) => setBoardName(e.target.value)}
                  placeholder="Amazing board"
                />
                <div className="flex flex-row" >
                  <button className="btn btn-success" type="submit">
                    Add board
                  </button>
                  <button className="btn btn-error" type="button" onClick={() => setInputVisible(!inputVisible)}>
                    Cancel
                  </button>
                </div>
            </form>
          </div>
          :
          <button
            type="button"
            className="btn"
            onClick={() => setInputVisible(!inputVisible)}
          >
            Create board
          </button>
        }
      </div>
      
    </div>
  );
}
