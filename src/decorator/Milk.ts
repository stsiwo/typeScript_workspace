import CondimentDecoratorABS from "./CondimentDecoratorABS";
import BeverageABS from "./BeverageABS";

class Milk extends CondimentDecoratorABS {

  constructor(beverage: BeverageABS) {
    const des = ", Milk";
    const cost = 1.50;
    super(des, cost, beverage);
  }

}

export default Milk;

