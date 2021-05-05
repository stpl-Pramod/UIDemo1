import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { UserregisterComponent } from './userregister/userregister.component';
 import { QuarryregisterComponent } from './quarryregister/quarryregister.component';
 import { StockpointComponent } from './stockpoint/stockpoint.component';
 import { PagenotfoundComponent } from '.././pagenotfound/pagenotfound.component';
 import { MasterComponent } from './master.component';
const routes: Routes = [
  //  {path:'', redirectTo:'userregister', pathMatch:'full'},
  //  {path:'userregister', component:UserregisterComponent},
  //  {path:'quarryregister', component:QuarryregisterComponent},
  // {path:'stockpoint', component:StockpointComponent},
  //  {path:'**', component:PagenotfoundComponent},
  {path:'master', component:MasterComponent, children:[ 
    {path:'', component:MasterComponent},
    {path:'userregister', component:UserregisterComponent},
    {path:'quarryregister', component:QuarryregisterComponent},
    {path:'stockpoint', component:StockpointComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

 //export const routingComponet = [UserregisterComponent, QuarryregisterComponent, StockpointComponent, PagenotfoundComponent]