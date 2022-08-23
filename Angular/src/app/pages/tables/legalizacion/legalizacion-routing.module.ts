import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalizacionComponent } from './legalizacion.component';


const routes: Routes = [
  {
    path: '',
    component: LegalizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalizacionRoutingModule { }
