import {IPost} from'./IPost';
export class Post implements IPost {
   publishDate: Date;
   postMessage: string;
   author: string;
   likes: number;
   dislikes: number;
    constructor(date:Date,message:string,auth:string) {
        this.publishDate = date;
        this.postMessage = message;
        this.author = auth;
        this.likes = 0;
        this.dislikes = 0; 
    }
}