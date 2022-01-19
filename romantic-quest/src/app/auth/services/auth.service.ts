import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IUser } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userFake: IUser = {
    username: 'TOLOMATOR',
    email: 'tomeu1224@gmail.com',
    password: 'test'
  }

  private serverUrl: string;

  constructor(private http: HttpClient) { }

  loginGood(x: any): Observable<any> {
    return this.http.get(this.serverUrl);
  }

  login(user: IUser): Observable<boolean> {
    let toSend = false;
    if(JSON.stringify(user) === JSON.stringify(this.userFake)) {
      toSend = true
    } else if(user.username === this.userFake.username || user.username === this.userFake.email) {
      toSend = true
    }
    return of (toSend).pipe(delay(1000));
  }
}
