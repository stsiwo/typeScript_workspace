import Character from "./Character";
import WeaponIF from "./WeaponIF";


class Knight extends Character {

  constructor(initName?: string, initWeapon?: WeaponIF) {
    super(initName, initWeapon);
  }
} 

export default Knight;
