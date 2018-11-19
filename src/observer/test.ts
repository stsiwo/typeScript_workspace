import Website from "./Website";
import Post from "./Post";
import User from "./User";

let satoshi: User = new User("satoshi");
let hitomi: User = new User("hitomi");
let kaoru: User = new User("kaoru");

let website: Website = new Website("my website");

satoshi.subscribe(website);
hitomi.subscribe(website);
kaoru.subscribe(website);

let post1: Post = new Post("initial post", "hello everyone!");

website.addNewPost(post1);

hitomi.unsubscribe(website);

let post2: Post = new Post("second post", "implemented observer pattern!!");

website.addNewPost(post2);

