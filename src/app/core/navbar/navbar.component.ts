import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavButtons } from 'src/app/shared/types/NavButtons.type';
import { NavBtn } from '../../shared/mockup/navbtn.mockup';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService) { }

  NavButtons: NavButtons[] = NavBtn
  isLoggedIn = this.auth.isLoggedIn.pipe(e => e)

  ngOnInit(): void {
  }

  login() {
    this.auth.login()
  }

  logout() {
    this.auth.logout()
  }

}
