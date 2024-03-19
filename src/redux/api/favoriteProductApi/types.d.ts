/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITE {
	type GetProductFavoiriteResponse = {
		_id: string;
		product: {
			_id: string;
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	}[];
	type GetProductFavoiriteRequest = void;

	type PostProductFavoiriteResponse = {
		newData: {
			photoUrl: string;
			price: number;
			productName: string;
			quantity: number;
		};
	};
	type PostProductFavoiriteRequest = string;
}
