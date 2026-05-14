import { Component, signal, output } from "@angular/core";
import { Character } from "../../../interfaces/characters.interfaces";

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter(): void {
    // Aquí podrías emitir un evento o llamar a un servicio para agregar el personaje
    console.log('Agregar personaje:', this.name(), 'con poder:', this.power());

    if (!this.name() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000), // Genera un ID aleatorio para el ejemplo
      name: this.name(),
      power: this.power()
    };
    console.log(newCharacter);
    this.newCharacter.emit(newCharacter);
  }
}
