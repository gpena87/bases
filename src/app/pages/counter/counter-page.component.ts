import { Component, signal } from "@angular/core";


@Component({
  // template: `
  // <h1>Counter: {{ counter }}</h1>
  // <h2>CounterPageComponent Page</h2>
  // <button (click)="increaseBy(1)">+1</button>
  // <button (click)="increaseBy(-1)">-1</button>
  // <button (click)="resetCounter()">Reset</button>
  // `,
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `
})
export class CounterPageComponent  {
  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( current => current + value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
