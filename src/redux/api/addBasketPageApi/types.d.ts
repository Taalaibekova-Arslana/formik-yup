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
	type PostProductBASKETResponse = {
		newData: {
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PostProductBASKETRequest = string;
}
