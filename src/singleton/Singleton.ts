class Singleton {

  private static _instance: Singleton;

  private static _counter: number = 0;

  private constructor() {}

  public static getInstance(): Singleton {
    if (Singleton._instance === null || Singleton._instance === undefined) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance
  }    

  public incrementCount(): void {
    Singleton._counter += 1;
  }

  public decrementCount(): void {
    Singleton._counter -= 1;
  }

  get counter() {
    return Singleton._counter;
  }
}
  
export default Singleton; 
