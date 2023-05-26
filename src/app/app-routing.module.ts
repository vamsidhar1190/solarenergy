import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChandigarhComponent } from './chandigarh/chandigarh.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      {
        path: "sidenav", component: SidenavComponent
      },
      {
        path: "Dashboard", component: DashboardComponent
      },

     ]
  },
  {
    path: 'chandigarh', component: ChandigarhComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
