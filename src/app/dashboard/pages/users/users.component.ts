import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";

import { UserService } from "@src/app/services/user.service";
import { TitleComponent } from "@src/app/shared/title/title.component";

@Component({
	standalone: true,
	imports: [CommonModule, RouterModule, TitleComponent],
	templateUrl: "./users.component.html",
	styles: ``,
})
export class UsersComponent {
	public _userSrv = inject(UserService);
}
