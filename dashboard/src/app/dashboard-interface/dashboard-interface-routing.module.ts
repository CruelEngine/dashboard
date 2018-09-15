import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from '../routes.enum';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  {path : Path.INTERFACE , component :InterfaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInterfaceRoutingModule { }
