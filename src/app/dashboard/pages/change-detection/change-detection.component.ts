import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Signal, computed, signal } from "@angular/core";

import { TitleComponent } from "@src/app/shared/title/title.component";

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./change-detection.component.html",
	styles: ``,
})
export class ChangeDetectionComponent {
	// Señal computada
	public currentFrameWork: Signal<string> = computed(() => `Change detection ${this.frameworkAsSignal().name}`);

	public frameworkAsSignal = signal({
		name: "Angular",
		releaseDate: "2016",
		type: "signal",
	});
	public frameworkAsProperty = {
		name: "Angular",
		releaseDate: "2016",
		type: "common property",
	};

	constructor() {
		setTimeout(() => {
			// this.frameworkAsProperty.name = "Angular modificado";
			this.frameworkAsSignal.update((value) => ({
				...value,
				name: "React",
			}));
			console.log("hecho");
		}, 3000);
	}
}
