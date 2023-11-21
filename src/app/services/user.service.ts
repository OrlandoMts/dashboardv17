import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";

import { Observable, delay, map } from "rxjs";
import { StateItf, UserItf, UserResponse, UsersResponse } from "../interfaces";

@Injectable({
	providedIn: "root",
})
export class UserService {
	private _http = inject(HttpClient);
	#state = signal<StateItf>({
		loading: true,
		users: [],
	});
	// Señal computada de solo lectura
	public users = computed(() => this.#state().users);
	public loading = computed(() => this.#state().loading);

	constructor() {
		this._http
			.get<UsersResponse>("https://reqres.in/api/users")
			.pipe(delay(2000))
			.subscribe((res) => {
				this.#state.set({
					loading: false,
					users: res?.data,
				});
			});
	}

	public getUserById(id: string): Observable<UserItf> {
		return this._http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(
			delay(2000),
			map((res) => res?.data)
		);
	}
}
