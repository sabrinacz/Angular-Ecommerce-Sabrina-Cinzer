import { Component, inject } from '@angular/core';
import { Post, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts : Post[] = []; 
  loading = true;
  error : string | null = null;
  private postsService = inject(PostsService);
  ngOnInit() {
    let observable = this.postsService.getPosts()
    observable.subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error obteniendo posts:', error);
        this.error = 'Error obteniendo posts';
        this.loading = false;
      }
    });
  }
}
