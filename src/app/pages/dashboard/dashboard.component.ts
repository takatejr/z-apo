import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, tap } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  searchControl = new FormControl();
  clearx$: Observable<string> = of('')
  data$: Observable<any> = this.auth.data.pipe(map(e => e))

  ngOnInit(): void {
    this.clearx$ = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(e => e),
        tap(e => console.log(e))
      );

    this.auth.fetchData()
    console.log(this.auth.data.value)
  }

  //id - procenty



  searchByInputValue(value: string) {

  }

  clearSearchControl() {
    this.searchControl.reset()
  }
}
