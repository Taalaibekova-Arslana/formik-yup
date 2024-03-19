export namespace USER {
	export type GetUserRequest = void;
	export type GetUserResponse = {
		_id: number;
		email: string;
		userName: string;
		password: string;
	};
	export type PostUserRequest = {
		// _id: number;
		email: string;
		userName: string;
		password: string;
	};
	export type PostUserResponse = {
		newData: {
			// _id: number;
			email: string;
			userName: string;
			password: string;
		};
	};
}
