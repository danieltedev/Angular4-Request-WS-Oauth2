import { Http, URLSearchParams } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { WsOauth2Service } from '../../service/ws-oauth2.service';
import { Login } from '../../interface/login';

@Component({
  selector: 'app-teste-ws',
  templateUrl: './teste-ws.component.html',
  styleUrls: ['./teste-ws.component.css']
})
export class TesteWsComponent implements OnInit {

  private apiRoot: String = 'http://httpbin.org';

  constructor(private _ws: WsOauth2Service, private _http: Http) { }

  ngOnInit() {
    const login: Login = {username: 'usu', password: 'usu'};
    console.log(login);
    this._ws.accessToken(login);

    // this._http.get('http://localhost:8080/item').subscribe(dado => console.log(dado));

    // const url = this.apiRoot + '/post';
    // const search = new URLSearchParams();

    // search.append('grant_type', 'password');
    // search.append('password', 'usu');
    // search.append('username', 'usu');

    // this._http.get(url, {search}).subscribe(res => console.log(res.json()));

    // this._http.post(url, {}, {search}).subscribe(res => console.log(res.json()));
  }

}
