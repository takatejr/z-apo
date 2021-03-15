import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false) // tutaj powinno być sprawdzenie tokena i next do isLoggedIn

  constructor(private route: Router) { }

  login() {
    this.isLoggedIn.next(true)
  }

  logout() {
    this.isLoggedIn.next(false)
    this.route.navigateByUrl("")
  }
}
