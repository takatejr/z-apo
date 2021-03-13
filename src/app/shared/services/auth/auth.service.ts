import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators'
import { FetchData } from '../../types/FetchData.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data = new BehaviorSubject<FetchData | unknown>([])
  isLoggedIn = new BehaviorSubject<boolean>(false) // tutaj powinno być sprawdzenie tokena i next do isLoggedIn

  constructor(private http: HttpClient, private route: Router) { }

  fetchData() {
    return this.http.get(`${environment.API_URL}`)
      .subscribe((data: FetchData | unknown) => {
        this.data.next(data);
        catchError(e => throwError(e))
      })
  }

  login() {
    this.isLoggedIn.next(true)
  }

  logout() {
    this.isLoggedIn.next(false)
    this.route.navigateByUrl("")
  }
}
