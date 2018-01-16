import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit{
    posts = [];

    constructor(private http: HttpClient){}

    ngOnInit(): void {
        this.http.get('http://localhost/allo/wp-json/wp/v2/posts').subscribe(data => {
            for(let key in data){
                if ( data.hasOwnProperty(key) ) {
                    this.posts.push(data[key]);
                }
            }
            console.log(this.posts);
        })
    }
}
