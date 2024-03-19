/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCT {
	type GetProductResponse = {
		_id: number;
		photoUrl: string;
		price: number;
		productName: string;
		quantity: number;
	}[];
	type GetProductRequest = void;
	type PostProductResponse = {
		newData: {
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PostProductRequest = string;
}
