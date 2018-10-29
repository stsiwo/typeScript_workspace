import PizzaABS from "./PizzaABS";

abstract class PizzaFactoryIF {
  // currently TS does not support static method in interface or abstract method so this is walkaround
  // PLEASE OVERRIDE THIS METHOD IN SUBTYPES
  static createPizza(type: string): PizzaABS {
    let pizza: PizzaABS;
    return pizza;
  }

}

export default PizzaFactoryIF;
