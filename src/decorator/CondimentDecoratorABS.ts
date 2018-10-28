import BeverageABS from "./BeverageABS";

abstract class CondimentDecoratorABS extends BeverageABS {

  private _beverage: BeverageABS;

  constructor(des: string, cost: number, beverage: BeverageABS) {
    super(des, cost);
    this._beverage = beverage;
  }

  get description(): string {
    return this._beverage.description + this._description;
  }

  set description(newDescription: string) {
    this.description = newDescription;
  }
  
  get cost(): number {
    return this._beverage.cost + this._cost;
  }

  set cost(newCost: number) {
    this.cost = newCost;
  }
  

}

export default CondimentDecoratorABS;
