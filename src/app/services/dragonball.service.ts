import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/characters.interfaces";


const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character): void {
    this.characters.update(characters => [...characters, character]);
  }
}
