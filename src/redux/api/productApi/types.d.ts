/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCT {
	type GetProductResponse = {
		_id: number;
		photoUrl: string;
		price: number;
		productName: string;
		quantity: number;
		isFavorite: boolean;
		isInBasket: boolean;
	}[];
	type GetProductRequest = void;
	// !POST
	type PostProductResponse = {
		_id: number;
		newData: {
			_id: number;
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PostProductRequest = {
		_id: number;
		values: {
			_id: number;
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	// !PUT
	type PutProductResponse = {
		_id: number;
		newData: {
			_id: number;
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PutProductRequest = {
		_id: number;
		newData: {
			photoUrl: string;
			price: string | number;
			productName: string;
			quantity: string | number;
		};
	};
}
