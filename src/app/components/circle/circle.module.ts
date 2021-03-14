import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './circle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    declarations: [CircleComponent],
    imports: [
        CommonModule,
        NgCircleProgressModule.forRoot({
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 100,
          }),
    ],
    exports: [
        CircleComponent
    ]
})
export class CircleModule { }