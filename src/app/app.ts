import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>{{ title() }}</h1>`,
  styles: [``]
})
export class App {
  protected readonly title = signal('sonarscan-angular-app');
}