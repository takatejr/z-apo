import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [FilterComponent],
    imports: [
        CommonModule,
        MatChipsModule,
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }