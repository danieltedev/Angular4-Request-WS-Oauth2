import { Login } from './../interface/login';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WsOauth2Service {
  constructor(private _http: Http) {}

  accessToken(loginData: Login) {
    const params = new URLSearchParams();

    params.append('grant_type', 'password');
    params.append('password', loginData.password);
    params.append('username', loginData.username);
    // params.append('client_id', 'my-trusted-client');

    const headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Basic ' + btoa('my-trusted-client:secret')
    });

    const options = new RequestOptions({ headers: headers, params: params});
    this._http
      .post('http://localhost:8080/oauth/token', null, options)
      .subscribe(data => console.log(data.json()), error => console.log(error));
  }
}
