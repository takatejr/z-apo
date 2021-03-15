import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'
import { FetchData } from '../../types/FetchData.type';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  data = new BehaviorSubject<FetchData[]>([])

  email$ = new BehaviorSubject<string[]>([])
  username$ = new BehaviorSubject<string[]>([])
  website$ = new BehaviorSubject<string[]>([])
  phone$ = new BehaviorSubject<string[]>([])
  name$ = new BehaviorSubject<string[]>([])

  isLoggedIn = new BehaviorSubject<boolean>(false) // tutaj powinno być np. sprawdzenie tokena

  constructor(private http: HttpClient) { }

  // post z payloadem lub get z params przy komunikacji http powinno być

  getData() {
    return this.http.get(`${environment.API_URL}`)
      .subscribe((res) => {
        this.data.next(res as FetchData[]);
        const emailArr: string[] = []
        const usernameArr: string[] = []
        const websiteArr: string[] = []
        const phoneArr: string[] = []
        const nameArr: string[] = []

        this.data.value.map(({ email, username, website, phone, name }) => {
          emailArr.push(email)
          usernameArr.push(username)
          websiteArr.push(website)
          phoneArr.push(phone)
          nameArr.push(name)
        })

        this.email$.next(emailArr)
        this.username$.next(usernameArr)
        this.website$.next(websiteArr)
        this.phone$.next(phoneArr)
        this.name$.next(nameArr)
      }),
      catchError(e => throwError(e))
  }
}
