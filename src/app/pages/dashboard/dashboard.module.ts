import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from '../../components/filter/filter.module';
import { CircleModule } from '../../components/circle/circle.module';
import { DashboardDataService } from '../../shared/services/dashboard-data/dashboard-data.service';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FilterModule,
        CircleModule
    ],
    exports: [
        DashboardComponent,
    ],
    providers: [
        DashboardDataService
    ]
})
export class DashboardModule { }