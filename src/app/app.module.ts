import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserregisterComponent } from './master/userregister/userregister.component';
import { QuarryregisterComponent } from './master/quarryregister/quarryregister.component';
import { StockpointComponent } from './master/stockpoint/stockpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    UserregisterComponent,
    QuarryregisterComponent,
    StockpointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
