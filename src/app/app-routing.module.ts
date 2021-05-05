import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MasterComponent } from './master/master.component';
import { UserregisterComponent } from './master/userregister/userregister.component';
import { QuarryregisterComponent } from './master/quarryregister/quarryregister.component';
import { StockpointComponent } from './master/stockpoint/stockpoint.component';
import { QuarryServeComponent } from './quarry-serve/quarry-serve.component';

const routes: Routes = [
  {path:'', redirectTo:'about', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'master', children:[ 
    {path:'', component:MasterComponent},
    {path:'userregister', component:UserregisterComponent},
    {path:'quarryregister', component:QuarryregisterComponent},
    {path:'stockpoint', component:StockpointComponent},
  ]
},
{path:'product', component:QuarryServeComponent},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
