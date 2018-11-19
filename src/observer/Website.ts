import { ISubject, IObserver } from "./Observer";
import Post from "./Post";

class Website implements ISubject<Post> {

  observers: Array<IObserver<Post>>;

  name: string;

  posts: Array<Post>;

  constructor(name: string) {
    this.name = name;
    this.posts = [];
    this.observers = [];
  }

  public addNewPost(newPost: Post): void {
    this.posts.push(newPost);
    this.notify(newPost);
  }

  public notify(newPost: Post): void {
    this.observers.forEach( (observer) => {
      observer.getUpdate(newPost);
    });
  }

  public registerObserver(observer: IObserver<Post>) {
    this.observers.push(observer);
  }

  public unregisterObserver(observer: IObserver<Post>) {
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
}

export default Website;
