export interface UsersResponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: UserItf[];
	support: SupportItf;
}

export interface UserItf {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface SupportItf {
	url: string;
	text: string;
}

export interface UserResponse {
	data: UserItf;
	suppot: SupportItf;
}
