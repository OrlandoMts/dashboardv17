import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from "@src/app/app.routes";

@Component({
	selector: "app-sidemenu",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./sidemenu.component.html",
	styles: ``,
})
export class SidemenuComponent {
	public menuRoutes = routes
		.map((route) => route.children ?? [])
		.flat()
		.filter((route) => route && route.path)
		.filter((route) => !route.path?.includes(":"));
}
