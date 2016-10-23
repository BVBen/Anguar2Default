import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnierHomeComponent } from './turnier-home.component';
import { DashboardComponent } from '../Dashboard/dashboard.component';

const tournamentRoutes: Routes = [

    {path:"", children:[
        // { path: "dashboard", component: DashboardComponent },
        { path: "", component: TurnierHomeComponent },
    ]}
  
];

export const tournamentRoutingProviders: any[] = [

];

export const tournamentRouteOutlet: ModuleWithProviders = RouterModule.forChild(tournamentRoutes);