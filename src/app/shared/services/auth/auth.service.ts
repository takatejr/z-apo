import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<boolean>(false) // tutaj powinno być sprawdzenie tokena i next do isLoggedIn

  constructor(private http: HttpClient) { }

  login(login = "guest", password = "guest"): Observable<any> {
    const payload = {
      login: login,
      password: password
    }

    return this.http.post(`${environment.API_URL}login`, payload)
      .pipe(
        map(matched => {
          if (matched) {
            this.isLoggedIn.next(true)
          }
        })
      )
  }

  logout(login = "guest", password = "guest"): Observable<any> {
    const payload = {
      login: login,
      password: password
    }

    return this.http.post(`${environment.API_URL}login`, payload)
      .pipe(
        this.isLoggedIn.next(false)
      )
  }
}
