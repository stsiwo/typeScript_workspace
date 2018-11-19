export interface ISubject<T> {
  observers: Array<IObserver<T>>;

  notify(item: T): void;

  registerObserver(observer: IObserver<T>): void;

  unregisterObserver(observer: IObserver<T>): void;
}

export interface IObserver<T> {

  getUpdate(item: T): void;
}


