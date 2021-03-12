import { Component, OnInit } from '@angular/core';
import { NavButtons } from 'src/app/shared/types/navbuttons.type';
import { NavBtn } from '../../shared/mockup/navbtn.mockup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  NavButtons: NavButtons[] = NavBtn

  constructor() { }

  ngOnInit(): void {
  }

}
