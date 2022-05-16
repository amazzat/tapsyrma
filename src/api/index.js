import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../lib/supabase";

export const supabaseApi = createApi({
  reducerPath: "supabase",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllNames: builder.query({
      queryFn: () => supabase.from("names").select()
    })
  })
});

export const { useGetAllNamesQuery } = supabaseApi;
