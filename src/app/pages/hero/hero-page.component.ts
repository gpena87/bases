import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `${ this.name() } - ${ this.age() }`);

  capitalizeName = computed(() => this.name().toUpperCase());

  // getHeroDescription() {
  //   return `${ this.name() } - ${ this.age() }`;
  // }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeHero() {
     this.name.set('Spiderman');
     this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }
}
