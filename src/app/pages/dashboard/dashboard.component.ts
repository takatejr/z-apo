import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  searchControl = new FormControl();
  clearx$: Observable<string> = of('')


  ngOnInit(): void {
    this.clearx$ = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(e => e),
        tap(e => console.log(e))
      );
  }

  searchByInputValue(value: string) {

  }

  clearSearchControl() {
    this.searchControl.reset()
  }
}
