import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './core/home/home.component';
import { DashboardGuard } from './guards/dashboard/dashboard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
