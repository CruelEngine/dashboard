import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from '../routes.enum';
import { InterfaceComponent } from './interface/interface.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path : Path.DASHBOARD , component:DashboardComponent ,children :[
    {path : Path.INTERFACE , component : InterfaceComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInterfaceRoutingModule { }
