import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private http: HttpClient
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

}
