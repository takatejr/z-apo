import { Component, EventEmitter, Input, Output, ViewEncapsulation, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap, map, startWith } from 'rxjs/operators';
import { FetchData } from '../../shared/types/FetchData.type';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  toppingsControl = new FormControl([]);
  @Output() selectedToppings = new EventEmitter()
  @Input() data: any = []
  @Input() title: string = '';

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

}
