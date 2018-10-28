import Character from "./Character";
import WeaponIF from "./WeaponIF";


class Thief extends Character {

  constructor(initName?: string, initWeapon?: WeaponIF) {
    super(initName, initWeapon);
  }
} 

export default Thief;


