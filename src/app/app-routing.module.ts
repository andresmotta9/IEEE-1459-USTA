import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ExcelComponent } from './components/excel/excel.component';

const routes: Routes = [
  {path:'board', component: DashboardComponent},
  {path:'excel', component: ExcelComponent},
  {path:'home', component: HomeComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
