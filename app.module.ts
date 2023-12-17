import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TourismComponent } from './tourism/tourism.component';
import { CommerceComponent } from './commerce/commerce.component';
import { CultureComponent } from './culture/culture.component';
import { NationalityLinksComponent } from './nationality-links/nationality-links.component';
import { WellBeingComponent } from './well-being/well-being.component';
// import { NavModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TourismComponent,
    CommerceComponent,
    CultureComponent,
    NationalityLinksComponent,
    WellBeingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
