import { Component, OnInit } from '@angular/core';
import { post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  posts:post[] = []


  constructor(public ps:PostsService) { }

  ngOnInit(): void {
    this.posts = this.ps.getAll();
  }

}
