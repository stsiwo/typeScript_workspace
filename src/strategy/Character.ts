import WeaponIF from "./WeaponIF";

class Character {
  
  private _name: string;
  private _weapon: WeaponIF;

  constructor(initName?: string, initWeapon?: WeaponIF) {
    this._name = initName;
    this._weapon = initWeapon;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  public attack() {
    this._weapon.attackWithWeapon();
  }

  get weapon(): WeaponIF {
    return this._weapon;
  }

  set weapon(newWeapon: WeaponIF) {
    this._weapon = newWeapon;
  }


}

export default Character;
