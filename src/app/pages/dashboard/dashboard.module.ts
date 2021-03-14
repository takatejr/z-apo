import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FilterComponent } from '../../components/filter/filter.component';

@NgModule({
    declarations: [DashboardComponent, FilterComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardComponent,
        FilterComponent
    ]
})
export class DashboardModule { }