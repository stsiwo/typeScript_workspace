import PizzaFactoryIF from "./PizzaFactoryIF";
import PizzaABS from "./PizzaABS";
import PizzaEnum from "./PizzaEnum";
import ChicagoCheezePizza from "./ChicagoCheezePizza";
import ChicagoVeggiePizza from "./ChicagoVeggiePizza";

class ChicagoPizzaFactory extends PizzaFactoryIF {

  static createPizza(type: string): PizzaABS {
    
    let pizza: PizzaABS;

    switch (type) {
      case PizzaEnum.CHEEZE_PIZZA:
        pizza = new ChicagoCheezePizza();
        break;
      case PizzaEnum.VEGGIE_PIZZA:
        pizza = new ChicagoVeggiePizza();
        break;
    }

    return pizza;
  }
}

export default ChicagoPizzaFactory;  
