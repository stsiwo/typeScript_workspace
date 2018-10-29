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

/** decorator pattern 

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

**/

/** factory (factory method pattern) 
    key ideas: dependency inversion: client depends on higher level abstraction rather than lower level concret class
    : see below, istead of directly init concret pizza class, call create method of factory class and deligate its generation

    factory method pattern: 
      - define interface 
      - its subclasses create its own concret class 
      * this pattern lets a class defer instantiation to subclasses
 **/
import PizzaFactoryIF from "./factory/PizzaFactoryIF";
import ChicagoPizzaFactory from "./factory/ChicagoPizzaFactory";
import NYPizzaFactory from "./factory/NYPizzaFactory";
import PizzaEnum from "./factory/PizzaEnum";
import PizzaABS from "./factory/PizzaABS";

// create chicago cheeze pizza test
let pizza: PizzaABS;
pizza = ChicagoPizzaFactory.createPizza(PizzaEnum.CHEEZE_PIZZA);

console.log(pizza);

pizza = NYPizzaFactory.createPizza(PizzaEnum.VEGGIE_PIZZA);

console.log(pizza);





