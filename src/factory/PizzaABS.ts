abstract class PizzaABS {

  private _name: string;

  constructor(newName: string) {
    this._name = newName;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
} 

export default PizzaABS;
