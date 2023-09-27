import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Header } from '../header';
import { HEADER } from '../mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  public header: Header = HEADER

  private postsUrl: string = 'https://dev-sandbox-mat01-be.sakuramobile.jp/api/v1/posts'
  public posts: any

  public postForm = new FormGroup({
    title: new FormControl('', [])
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.http.get(this.postsUrl)
    .subscribe((result: any) => {
      this.posts = result.data; // keyがdata, valueが投稿の配列。左記はRails APIのjson出力で設定
    });
  }

  postPostData(data: any) {
    this.http.post(this.postsUrl, data)
    .subscribe((result) => {
      setTimeout(() => this.getPostData() , 200);
    });
  }

  deletePost(id: number) {
    this.http.delete(this.postsUrl + '/' + id)
    .subscribe((result) => {
      setTimeout(() => this.getPostData(), 200);
    });
  }

}
