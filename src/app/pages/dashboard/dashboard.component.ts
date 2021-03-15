import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, filter, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, combineLatest, from, forkJoin } from 'rxjs';
import { DashboardDataService } from '../../shared/services/dashboard-data/dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  submit = false
  constructor(private dashboardService: DashboardDataService) { }

  name$ = this.dashboardService.name$.pipe(map(e => e))
  username$ = this.dashboardService.username$.pipe(map(e => e))
  website$ = this.dashboardService.website$.pipe(map(e => e))
  phone$ = this.dashboardService.phone$.pipe(map(e => e))
  email$ = this.dashboardService.email$.pipe(map(e => e))

  outputName$ = new BehaviorSubject([])
  outputUsername$ = new BehaviorSubject([])
  outputWebsite$ = new BehaviorSubject([])
  outputPhone$ = new BehaviorSubject([])
  outputEmail$ = new BehaviorSubject([])
  outputs$ = combineLatest([
    this.outputEmail$,
    this.outputName$,
    this.outputUsername$,
    this.outputWebsite$,
    this.outputPhone$,
    ])
    .pipe(map(e => e))


  searchControl = new FormControl();
  clear$: Observable<string> = of('')
  data$: Observable<any> =      combineLatest([this.outputs$, this.dashboardService.data.asObservable()]).pipe(
    map(([outs, datax]) => {
     const emailFilter = datax.filter(({email}) => {
     if (!this.outputEmail$.value[0]){
        return true
      } else {
        return this.outputEmail$.value.includes(email as never)
      }
      })

      const nameFilter = emailFilter.filter(({name}) => {
        if (!this.outputName$.value[0]){
          return true
        } else {
          return this.outputName$.value.includes(name as never)
        }
      })

      const usernameFilter = nameFilter.filter(({username}) => {
        if (!this.outputUsername$.value[0]){
          return true
        } else {
          return this.outputUsername$.value.includes(username as never)
        }
      })

      const websiteFilter = usernameFilter.filter(({website}) => {
        if (!this.outputWebsite$.value[0]){
          return true
        } else {
          return this.outputWebsite$.value.includes(website as never)
        }
      })

      const phoneFilter = websiteFilter.filter(({phone}) => {
        if (!this.outputPhone$.value[0]){
          return true
        } else {
          return this.outputPhone$.value.includes(phone as never)
        }
      })

      return phoneFilter
    }),
    map(e => e),
  )

  ngOnInit(): void {
    this.clear$ = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(e => e),
      );
  }

  searchByInputValue(value?: string) {
    this.submit = true;
    this.dashboardService.getData()
  }

  clearSearchControl() {
    this.searchControl.reset()
  }
}
