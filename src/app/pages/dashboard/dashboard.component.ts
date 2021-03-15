import { Component,  OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, combineLatest } from 'rxjs';
import { GetDataService } from '../../shared/services/dashboard-data/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submit = false
  constructor(private getData:GetDataService) { }

  name$ = this.getData.name$.pipe(map(e => e))
  username$ = this.getData.username$.pipe(map(e => e))
  website$ = this.getData.website$.pipe(map(e => e))
  phone$ = this.getData.phone$.pipe(map(e => e))
  email$ = this.getData.email$.pipe(map(e => e))

  outputName$ = new BehaviorSubject([])
  outputUsername$ = new BehaviorSubject([])
  outputWebsite$ = new BehaviorSubject([])
  outputPhone$ = new BehaviorSubject([])
  outputEmail$ = new BehaviorSubject([])

  searchControl = new FormControl();
  clear$: Observable<string> = of('')
  data$: Observable<any> = this.getData.data
    .pipe(map(e => e.filter(({email}) => {
      if (!this.outputEmail$.value[0]){
        return true
      } else {
        return this.outputEmail$.value.includes(email)
      }
    })),
    map(e => e.filter(({name}) => {
      if (!this.outputName$.value[0]){
        return true
      } else {
        return this.outputName$.value.includes(name)
      }
    })),
    map(e => e.filter(({phone}) => {
      if (!this.outputPhone$.value[0]){
        return true
      } else {
        return this.outputPhone$.value.includes(phone)
      }
    })),
    map(e => e.filter(({username}) => {
      if (!this.outputUsername$.value[0]){
        return true
      } else {
        return this.outputUsername$.value.includes(username)
      }
    })),
    map(e => e.filter(({website}) => {
      if (!this.outputWebsite$.value[0]){
        return true
      } else {
        return this.outputWebsite$.value.includes(website)
      }
    })),)

  ngOnInit(): void {
    this.clear$ = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(e => e),
      );

  }

  searchByInputValue() {
    this.submit = true;
    this.getData.getData()
  }

  clearSearchControl() {
    this.searchControl.reset()
  }
}
