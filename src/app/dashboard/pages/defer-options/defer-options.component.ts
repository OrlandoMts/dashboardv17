import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { HeavyLoaderFastComponent } from "@src/app/shared/heavy-loader/heavy-loader-fast.component";
import { TitleComponent } from "@src/app/shared/title/title.component";

@Component({
	standalone: true,
	imports: [CommonModule, HeavyLoaderFastComponent, TitleComponent],
	templateUrl: "./defer-options.component.html",
	styles: ``,
})
export class DeferOptionsComponent {}
