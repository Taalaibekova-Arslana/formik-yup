import { api as index } from "..";
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getLogin: builder.query({
			query: () => "login",
			providesTags: ["login"],
		}),

		postLogin: builder.mutation({
			query: (newData) => (
				{
				url: "login",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["login"],
		}),
	}),
});

export const { useGetLoginQuery, usePostLoginMutation } = api;
