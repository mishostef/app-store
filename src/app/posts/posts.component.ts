import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {PostService} from './post.service';
import {Post} from '../interfaces/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm: FormGroup;
  fb = new FormBuilder();

  ngOnInit() {
  }
  constructor(private postService: PostService) {
    this.postForm = new FormGroup({
    postMessage: new FormControl(''),
    author: new FormControl(''),
  });
  }

    postHandler() {
       let author = this.postForm.value.author;
       let message = this.postForm.value.postMessage;
       let date = new Date();
       let currentPost = new Post(date,message,author);
       this.postService.createPost(currentPost).toPromise();
    }

}
