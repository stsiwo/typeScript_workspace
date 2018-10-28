import CondimentDecoratorABS from "./CondimentDecoratorABS";
import BeverageABS from "./BeverageABS";

class Mocha extends CondimentDecoratorABS {

  constructor(beverage: BeverageABS) {
    const des = ", Mocha";
    const cost = 1.25;
    super(des, cost, beverage);
  }

}

export default Mocha;
