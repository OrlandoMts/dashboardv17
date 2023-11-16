import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-heavy-loader-slow",
	standalone: true,
	imports: [CommonModule],
	template: ` <p>heavy-loader-slow works!</p> `,
	styles: ``,
})
export class HeavyLoaderSlowComponent {}
