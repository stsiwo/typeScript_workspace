import Character from "./strategy/Character";
import Knight from "./strategy/Knight";
import WeaponIF from "./strategy/WeaponIF";
import Sword from "./strategy/Sword";
import Rod from "./strategy/Rod";
import Dagger from "./strategy/Dagger";


let weapon: WeaponIF;
weapon = new Sword();
let character: Character;
character = new Knight("satoshi", weapon);

character.attack();

weapon = new Rod();

character.weapon = weapon;

character.attack();

weapon = new Dagger();

character.weapon = weapon;

character.attack();


