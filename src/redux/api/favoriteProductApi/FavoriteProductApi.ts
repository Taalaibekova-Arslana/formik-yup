import { api as index } from "../";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getFavoriteProduct: builder.query<
			FAVORITE.GetProductFavoiriteResponse,
			FAVORITE.GetProductFavoiriteRequest
		>({
			query: () => ({
				url: "favorites-products",
			}),
			providesTags: ["products"],
		}),
		postFavoriteProduct: builder.mutation<
			FAVORITE.PostProductFavoiriteResponse,
			FAVORITE.PostProductFavoiriteRequest
		>({
			query: (id) => ({
				url: `favorites-products/${id}`,
				method: "POST",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const { useGetFavoriteProductQuery, usePostFavoriteProductMutation } =
	api;
