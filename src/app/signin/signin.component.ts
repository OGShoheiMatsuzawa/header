import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {

  private url: string = 'https://dev-sandbox-mat01-be.sakuramobile.jp/users/sign_in';

  signinForm = new FormGroup({
    user: new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', [])
    }),
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  signin(data: any) {
    // this.http.post(this.url, data, { observe: 'response' })
    this.http.post(this.url, data, { responseType: 'text' })
    .subscribe((res) => {
      // console.log(res);
      /*
      const access_token = res.headers.get('access-token');
      const client = res.headers.get('client');
      const uid = res.headers.get('uid');
      console.log(`access-token: ${access_token}`);
      console.log(`client: ${client}`);
      console.log(`uid: ${uid}`);
      */
      this.router.navigate(['header']);
    });
  }
}
