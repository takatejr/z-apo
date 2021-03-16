import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    declarations: [FilterComponent],
    imports: [
        CommonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatSelectModule
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }