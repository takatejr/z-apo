import { Component, OnInit } from '@angular/core';
import { NavButtons } from 'src/app/shared/types/navbuttons.type';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  NavButtons: NavButtons[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
