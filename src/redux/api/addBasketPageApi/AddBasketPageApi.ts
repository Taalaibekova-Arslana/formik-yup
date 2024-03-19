import { api as index } from "../";
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getBasketProduct: builder.query<
			BASKET.GetProductBASKETResponse,
			BASKET.GetProductBASKETRequest
		>({
			query: () => ({
				url: "basket",
			}),
			providesTags: ["products"],
		}),
		postBasketProduct: builder.mutation<
			BASKET.PostProductBASKETResponse,
			BASKET.PostProductBASKETRequest
		>({
			query: (id) => ({
				url: `basket/${id}`,
				method: "POST",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const { useGetBasketProductQuery, usePostBasketProductMutation } = api;
