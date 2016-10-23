import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../Dashboard/dashboard.component';

const dashboardRoutes: Routes = [

    {path:"", children:[
        { path: "", component: DashboardComponent },
        {path: "tournament", loadChildren: 'app/TurnierHome/turnier-home.module#TurnierHomeModule'}
    ]}
  
];

export const dashboardRoutingProviders: any[] = [

];

export const dashboardRouteOutlet: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);