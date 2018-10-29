import PizzaFactoryIF from "./PizzaFactoryIF";
import PizzaABS from "./PizzaABS";
import PizzaEnum from "./PizzaEnum";
import NYCheezePizza from "./NYCheezePizza";
import NYVeggiePizza from "./NYVeggiePizza";

class NYPizzaFactory extends PizzaFactoryIF {

  static createPizza(type: string): PizzaABS {
    
    let pizza: PizzaABS;

    switch (type) {
      case PizzaEnum.CHEEZE_PIZZA:
        pizza = new NYCheezePizza();
        break;
      case PizzaEnum.VEGGIE_PIZZA:
        pizza = new NYVeggiePizza();
        break;
    }

    return pizza;
  }
}

export default NYPizzaFactory;
