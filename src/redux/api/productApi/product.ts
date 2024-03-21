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
		putProduct: builder.mutation<
			PRODUCT.PutProductResponse,
			PRODUCT.PutProductRequest
		>({
			query: ({ _id, newData }) => ({
				url: `products/${_id}`,
				method: "PUT",
				body: newData,
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetProductQuery,
	usePostProductMutation,
	usePutProductMutation,
} = api;
