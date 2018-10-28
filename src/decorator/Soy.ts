import CondimentDecoratorABS from "./CondimentDecoratorABS";
import BeverageABS from "./BeverageABS";

class Soy extends CondimentDecoratorABS {

  constructor(beverage: BeverageABS) {
    const des = ", Soy";
    const cost = 0.99;
    super(des, cost, beverage);
  }

}

export default Soy;

