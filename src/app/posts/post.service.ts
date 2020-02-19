import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '.././interfaces/Post';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
postsUrl= '/posts';

  constructor( private http: HttpClient) { }
  // get("/api/posts")
    /*getUsers(): Observable<Post[]>{
      return this.http.get<any>('/api/posts')
      .pipe(map((res) => res as User[]));
    }*/



    // post("/posts")
    createPost(newPost: Post): Observable<Post> {
      console.log('new user is' + JSON.stringify(newPost));
      return this.http.post(this.postsUrl, newPost)
      .pipe(map((res) => res as Post));
    }

    // get("/api/posts/all")
  getAllPosts(): Observable<Post[]> {
    return this.http.get<any>('/api/posts/all')
    .pipe(map( (res) => res as Post[]));
  }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
