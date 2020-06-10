import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsgridComponent } from './statsgrid/statsgrid.component';
import { NgImageSliderComponent } from 'ng-image-slider';


const routes: Routes = [
  { path: 'stats', component: StatsgridComponent },
  { path: 'players', component: NgImageSliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
