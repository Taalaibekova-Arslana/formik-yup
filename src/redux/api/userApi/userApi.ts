import { api as index } from "../";
import { USER } from "./types";
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<USER.GetUserResponse, USER.GetUserRequest>({
			query: () => "users",
			providesTags: ["users"],
		}),
		postUser: builder.mutation<USER.PostUserResponse, USER.PostUserRequest>({
			query: (newData) => ({
				url: "users",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["users"],
		}),
		deleteAllUser: builder.mutation({
			query: () => ({
				url: "users",
				method: "DELETE",
			}),
			invalidatesTags: ["users"],
		}),
	}),
});

export const {
	useGetUsersQuery,
	usePostUserMutation,
	useDeleteAllUserMutation,
} = api;
