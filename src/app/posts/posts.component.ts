import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {PostService} from './post.service';
import {Post} from '../interfaces/Post';


import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MatIconModule }from '@angular/material/icon';
import { from } from 'rxjs';



interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];





@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   treeControl = new NestedTreeControl<FoodNode>(node => node.children);
   private dataSource = new MatTreeNestedDataSource<FoodNode>();


  postForm: FormGroup;
  fb = new FormBuilder();
  allposts: Post[];

  ngOnInit() {
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  constructor(private postService: PostService) {
    this.postForm = new FormGroup({
    postMessage: new FormControl(''),
    author: new FormControl(''),
  }
  );

  this.postService.getAllPosts()
    .subscribe(allposts => this.allposts = allposts);


    this.dataSource.data = TREE_DATA;
console.log(this.dataSource.data)
  }

    postHandler() {
       let author = this.postForm.value.author;
       let message = this.postForm.value.postMessage;
       let date = new Date();
       let currentPost = new Post(date,message,author);
       this.postService.createPost(currentPost).toPromise();
       this.postService.getAllPosts()
    .subscribe(allposts => this.allposts = allposts);
    }



}
