import { UserItf } from "./req-res.itf";

export interface StateItf {
	users: UserItf[];
	loading: boolean;
}
