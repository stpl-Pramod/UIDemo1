import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserregisterComponent } from './master/userregister/userregister.component';
import { QuarryregisterComponent } from './master/quarryregister/quarryregister.component';
import { StockpointComponent } from './master/stockpoint/stockpoint.component';
import { FormsModule } from '@angular/forms';
import { QuarryServeComponent } from './quarry-serve/quarry-serve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    UserregisterComponent,
    QuarryregisterComponent,
    StockpointComponent,
    QuarryServeComponent,
    MasterComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
