import { Routes } from '@angular/router';
import { FcfsComponent } from './fcfs/fcfs.component';
import { RoundRobinComponent } from './round-robin/round-robin.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'fcfs', pathMatch: 'full' },
    { path: 'fcfs', component: FcfsComponent },
    { path: 'round-robin', component: RoundRobinComponent },
]