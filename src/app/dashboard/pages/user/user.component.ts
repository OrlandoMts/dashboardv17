import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "@src/app/services/user.service";
import { TitleComponent } from "@src/app/shared/title/title.component";
import { switchMap } from "rxjs";

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	templateUrl: "./user.component.html",
	styles: ``,
})
export class UserComponent {
	private _actRou = inject(ActivatedRoute);
	private _userSrv = inject(UserService);
	// public user = signal<UserItf | undefined>(undefined);
	public user = toSignal(this._actRou.params.pipe(switchMap(({ _id }) => this._userSrv.getUserById(_id))));
	// public titleLabel = computed(() => `Información del usuario: ${this.user()?.first_name} - ${this.user()?.last_name}`);
	public titleLabel = computed(() => {
		if (this.user()) {
			return `Información del usuario: ${this.user()?.first_name} - ${this.user()?.last_name}`;
		}
		return "Cargando información del usuario...";
	});
}
