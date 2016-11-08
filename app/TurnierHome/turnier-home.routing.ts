import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnierHomeComponent } from './turnier-home.component';
import { DashboardComponent } from '../Dashboard/dashboard.component';
import { MatchDetailComponent } from '../MatchDetail/match-detail.component';

const tournamentRoutes: Routes = [

    {path:"", children:[
        { path: "", component: TurnierHomeComponent },
        { path: "match/:id", component: MatchDetailComponent }
    ]}
];

export const tournamentRoutingProviders: any[] = [

];

export const tournamentRouteOutlet: ModuleWithProviders = RouterModule.forChild(tournamentRoutes);