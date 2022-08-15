import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataLoadComponent } from './data-load.component';


const routes: Routes = [
  {
    path: '',
    component: DataLoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataLoadRoutingModule { }
