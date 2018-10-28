/* import Character from "./strategy/Character"; */
/* import Knight from "./strategy/Knight"; */
/* import WeaponIF from "./strategy/WeaponIF"; */
/* import Sword from "./strategy/Sword"; */
/* import Rod from "./strategy/Rod"; */
/* import Dagger from "./strategy/Dagger"; */

/** strategy pattern 

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

**/

import BeverageABS from "./decorator/BeverageABS";
import CondimentDecoratorABS from "./decorator/CondimentDecoratorABS";
import Espresso from "./decorator/Espresso";
import Mocha from "./decorator/Mocha";
import Soy from "./decorator/Soy";
import Milk from "./decorator/Milk";

// order base beverage 
let beverage: BeverageABS;
beverage = new Espresso();

// add  toppings
beverage = new Mocha(beverage);
beverage = new Soy(beverage);
beverage = new Milk(beverage);

console.log(beverage.description);
console.log(beverage.cost);




