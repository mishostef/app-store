import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../interfaces/Post';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
@Input()
post: Post;
  constructor() { }

  ngOnInit() {
  }

}
