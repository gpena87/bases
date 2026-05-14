import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
    selector: 'app-dragonball-super-page',
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPageComponent {
  // constructor(
  //   public dragonballService: DragonballService
  // ) {}
  public dragonballService = inject(DragonballService);
}
