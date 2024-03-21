/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BASKET {
	type GetProductBASKETResponse = {
		_id: number;
		product: {
			_id: number;
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	}[];
	type GetProductBASKETRequest = void;
	// !PATCH
	type PostProductBASKETResponse = {
		newData: {
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PostProductBASKETRequest = string;
	// !PATCH
	type PatchProductBASKETResponse = {
		_id: string;
		newBaskets: {
			quantityToDecrease: number;
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PatchProductBASKETRequest = {
		_id: number;
		newBaskets: {
			quantityToDecrease: number;
		};
	};
}
