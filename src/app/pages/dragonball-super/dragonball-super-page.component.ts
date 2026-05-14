import { Component, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add.component";
import type { Character } from '../../interfaces/characters.interfaces';

@Component({
    selector: 'app-dragonball-super-page',
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ])

  addCharacter(character: Character): void {
    this.characters.update(characters => [...characters, character]);
  }
}
