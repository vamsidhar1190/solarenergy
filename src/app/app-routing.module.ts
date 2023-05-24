import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChandigarhComponent } from './chandigarh/chandigarh.component';

const routes: Routes = [
  {
    path:"",component:SidenavComponent,
    children:[ {
    path:"sidenav",component:SidenavComponent
  },
  {
    path:'chandigarh',component:ChandigarhComponent
  }]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
