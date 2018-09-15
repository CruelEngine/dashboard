import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardInterfaceRoutingModule } from './dashboard-interface-routing.module';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardInterfaceRoutingModule
  ],
  declarations: [InterfaceComponent]
})
export class DashboardInterfaceModule { }
