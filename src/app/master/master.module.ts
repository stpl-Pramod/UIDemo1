import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { UserregisterComponent } from './userregister/userregister.component';
import { QuarryregisterComponent } from './quarryregister/quarryregister.component';
import { StockpointComponent } from './stockpoint/stockpoint.component';
import { MasterComponent } from './master.component';


@NgModule({
  declarations: [
    UserregisterComponent,
    QuarryregisterComponent,
    StockpointComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
