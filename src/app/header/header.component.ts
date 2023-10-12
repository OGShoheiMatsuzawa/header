import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.getHeader();
  }

  getPostData() {
    this.http.get(this.postsUrl)
    .subscribe((res: any) => {
      this.posts = res.data; // keyがdata, valueが投稿の配列。左記はRails APIのjson出力で設定
    });
  }

  getHeader() {
    this.http.get<any>(this.postsUrl, { observe: 'response'})
    .subscribe(res => {
      console.log(res.headers);
    })
  }

  postPostData(data: any) {
    this.http.post(this.postsUrl, data)
    .subscribe((response) => {
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
