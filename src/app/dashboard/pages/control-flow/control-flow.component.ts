import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";

import { TitleComponent } from "@src/app/shared/title/title.component";

type Grade = "A" | "B" | "F";

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	templateUrl: "./control-flow.component.html",
	styles: ``,
})
export class ControlFlowComponent {
	public showContent = signal(false);
	public grade = signal<Grade>("A");
	public frameworks = signal<string[]>(["Angular", "Vue", "Svelt", "React", "Otra opcion"]);
	public frameworks2 = signal<string[]>([]);

	public toggleContent() {
		this.showContent.update((value) => !value);
	}
}
