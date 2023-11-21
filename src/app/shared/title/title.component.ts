import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	selector: "app-title",
	standalone: true,
	imports: [CommonModule],
	template: ` <h1 class="text-3xl mb-5">{{ title }}</h1> `,
	styles: ``,
})
export class TitleComponent {
	@Input({ required: true }) title!: string;
}
