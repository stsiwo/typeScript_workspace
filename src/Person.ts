class Person {
  
  private _firstName: string;
  private _lastName: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(newName: string) {
    this._firstName = newName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(newName: string) {
    this._lastName = newName;
  }
  
}

export default Person;
