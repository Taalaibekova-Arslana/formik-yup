export namespace LOGIN {
	export type GetLoginRequest = void;
	export type GetLoginResponse = {
		_id: number;
		email: string;
		userName: string;
		password: string;
	};
	export type PostLoginRequest = {
		// _id: number;
		email: string;
		userName: string;
		password: string;
	};
	export type PostLoginResponse = {
		newData: {
			// _id: number;
			email: string;
			userName: string;
			password: string;
		};
	};
}
