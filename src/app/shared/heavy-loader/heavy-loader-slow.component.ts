import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	selector: "app-heavy-loader-slow",
	standalone: true,
	imports: [CommonModule],
	template: ` <section [ngClass]="['w-flull h-[600px]', cssClass]">Heavy loader slow!</section> `,
	styles: ``,
})
export class HeavyLoaderSlowComponent {
	@Input({ required: true }) cssClass!: string;

	constructor() {
		const start = Date.now();
		while (Date.now() - start < 3000) {}
		console.log("Ya se cargó");
	}
}
