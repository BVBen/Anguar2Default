import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [

  {path: "dashboard", loadChildren:'app/Dashboard/dashboard.module#DashboardModule'},

  { path: "", redirectTo:"dashboard", pathMatch:"full"},

   
//   { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);