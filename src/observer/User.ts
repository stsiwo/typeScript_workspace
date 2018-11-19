import { ISubject, IObserver } from "./Observer";
import Post from "./Post";

class User implements IObserver<Post> {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public subscribe(subject: ISubject<Post>): void {
    subject.registerObserver(this);
  }

  public unsubscribe(subject: ISubject<Post>): void {
    subject.unregisterObserver(this);
  }

  public getUpdate(newPost: Post) {
    console.log(`hey ${this.name}. Your subscribed website added new Post: \n title: ${newPost.title} \n content: ${newPost.content}`);
  }
}

export default User;
