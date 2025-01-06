import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './modules/work/work.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {path:'Work', component: WorkComponent},
  {path:'About', component: AboutComponent},
  {path: '', redirectTo:'/Work', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
