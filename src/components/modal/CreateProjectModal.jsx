/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useSelector } from "react-redux";
import { useState } from "react";
import { useAddProjectMutation } from "../../api/index";
import { userSelector } from "../../store/auth/index";
import { useToast } from "../../lib/hooks/useToast";


export function CreateProjectModal({ show, onHide }) {
  const user = useSelector(userSelector);
  const [projectName, setProjectName] = useState("");
  const toast = useToast();
  const [addProject] = useAddProjectMutation();

  const handleSubmitCreateProject = async (e) => {
    e.preventDefault();

    if (projectName) {
      const project = {
        project_name: projectName,
        owner_id: user.id
      };

      addProject({ project });
    }

    onHide()
    toast("Created project successfully!", "success")
  };

  return (
      show && (
        <div 
          className="fixed h-screen w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-5"
          onClick={onHide}
        >
          <form 
            className="flex flex-col space-y-5 border-neutral-700 bg-neutral-800 px-12 py-10 shadow-inner rounded"
            onClick={e => e.stopPropagation()}
            onSubmit={handleSubmitCreateProject}
          >
            <label className="w-96" htmlFor="text">
              <div className="input-label mb-6 text-3xl font-bold ">Enter project name</div>
              <input
                type="text"
                className="input w-full"
                placeholder="Amazing project"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </label>
            
            <div className="flex justify-end gap-8">
              <button type="button" className="btn btn-error" onClick={onHide}>
                Close 
              </button>
              <button type="submit" className="btn btn-success">
                Create
              </button>
            </div>
          </form>
        </div>
      )
  );
}
