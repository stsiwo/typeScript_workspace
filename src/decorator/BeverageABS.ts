abstract class BeverageABS {

  protected _description: string;
  protected _cost: number;

  constructor(des: string, cost: number) {
    this._description = des;
    this._cost = cost;
  }

  get description(): string {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(newCost: number) {
    this._cost = newCost;
  }
}

export default BeverageABS;
