import { Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  toppingsControl = new FormControl([]);
  @Output() selectedToppings = new EventEmitter()
  @Input() data: string[] | null = []
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
