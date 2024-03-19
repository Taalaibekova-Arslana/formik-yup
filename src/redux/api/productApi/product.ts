import { api as index } from "../";
const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getProduct: builder.query<
			PRODUCT.GetProductResponse,
			PRODUCT.GetProductRequest
		>({
			query: () => ({
				url: "products",
			}),
			providesTags: ["products"],
		}),
		postProduct: builder.mutation<
			PRODUCT.PostProductResponse,
			PRODUCT.PostProductRequest
		>({
			query: (newData) => ({
				url: "products",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["products"],
		}),
		deleteProduct: builder.mutation<
			PRODUCT.PostProductResponse,
			PRODUCT.PostProductRequest
		>({
			query: (_id) => ({
				url: `products${_id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetProductQuery,
	usePostProductMutation,
	useDeleteProductMutation,
} = api;
