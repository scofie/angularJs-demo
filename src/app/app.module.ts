import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManagerComponent } from './stock/manager/manager.component';
import { StarsComponent } from './stars/stars.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './stock/form/form.component';


const routeConfig:Routes = [
  {path:'' , redirectTo:"dashboard",pathMatch:'full'},
  {path:'dashboard' , component:DashboardComponent},
  {path:'stock' , component:ManagerComponent},
  {path:'stock/:id' , component:FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    SidebarComponent,
    ManagerComponent,
    StarsComponent,
    DashboardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
