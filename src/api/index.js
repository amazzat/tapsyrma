import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../lib/supabase";

export const supabaseApi = createApi({
  reducerPath: "supabase",
  tagTypes: ['Project', 'Board', 'Task'],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // getAllNames: builder.query({
    //   queryFn: () => supabase.from("names").select()
    // }),

    getUserProjects: builder.query({
      queryFn: (userId) =>
        supabase.from("project").select().eq("owner_id", userId),
      providesTags: (result) =>
        result
        ? [...result.map(({ id }) => ({type: "Project", id})), "Project"]
        : ["Project"]
    }),
    addProject: builder.mutation({
      queryFn: ({ project }) => 
        supabase.from("project").insert(project),
      invalidatesTags: (arg) => [{type: 'Project', id: arg.id}]
    }),
    updateProject: builder.mutation({
      queryFn: ({ projectUpdates }) =>
        supabase.from("project").upsert(projectUpdates),
      invalidatesTags: (arg) => [{type: 'Project', id: arg.id}]
    }),
    deleteProject: builder.mutation({
      queryFn: (projectId) =>
        supabase.from("project").delete().match({ project_id: projectId }),
      invalidatesTags: (arg) => [{type: 'Project', id: arg.id}]
    }),

    getProjectBoards: builder.query({
      queryFn: (projectId) =>
        supabase.from("board").select().eq("project_id", projectId)
    }),
    addBoard: builder.mutation({
      queryFn: ({ board }) => 
        supabase.from("board").insert(board)
    }),
    updateBoard: builder.mutation({
      queryFn: ({ boardUpdates }) => 
        supabase.from("board").upsert(boardUpdates)
    }),
    deleteBoard: builder.mutation({
      queryFn: (boardId) =>
        supabase.from("board").delete().match({ board_id: boardId })
    }),

    getBoardTasks: builder.query({
      queryFn: (boardId) =>
        supabase.from("task").select().eq("board_id", boardId)
    }),
    addTask: builder.mutation({
      queryFn: ({ task }) => 
        supabase.from("task").insert(task)
    }),
    updateTask: builder.mutation({
      queryFn: ({ taskUpdates }) => 
        supabase.from("task").upsert(taskUpdates)
    }),
    deleteTask: builder.mutation({
      queryFn: (taskId) =>
        supabase.from("task").delete().match({ task_id: taskId })
    })
  })
});

export const {
  useGetUserProjectsQuery,
  useAddProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
  useGetProjectBoardsQuery,
  useAddBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
  useGetBoardTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = supabaseApi;
