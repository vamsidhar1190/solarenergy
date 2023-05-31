import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChandigarhComponent } from './chandigarh/chandigarh.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartModule } from 'primeng/chart';
import { HighchartsChartModule } from 'highcharts-angular';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    ChandigarhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot(),
    ChartModule,
    HighchartsChartModule,
    InputSwitchModule,FormsModule,
    CalendarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
