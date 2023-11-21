import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { HeavyLoaderSlowComponent } from "@src/app/shared/heavy-loader/heavy-loader-slow.component";
import { TitleComponent } from "@src/app/shared/title/title.component";

@Component({
	standalone: true,
	imports: [CommonModule, HeavyLoaderSlowComponent, TitleComponent],
	templateUrl: "./defer-views.component.html",
	styles: ``,
})
export class DeferViewsComponent {}
