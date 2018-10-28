import BeverageABS from "./BeverageABS";

class Espresso extends BeverageABS {

  constructor() {
    const des = "this is Espresso with toppings";
    const cost = 3.00;
    super(des, cost);
  }

}

export default Espresso;
