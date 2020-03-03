import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../interfaces/Post';
import {StyleDirective} from '../shared/directives/style.directive'
import { style, trigger, state, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-all-posts',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],


  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
@Input()
post: Post;

isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }
like() {
  this.post.likes++;
}
dislike() {
  this.post.dislikes++;
}

}
