import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BoxesComponent } from './boxes/boxes.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HisotryComponent } from './hisotry/hisotry.component';
import { SecondbannerComponent } from './secondbanner/secondbanner.component';
import { NavComponent } from './nav/nav.component';
import { StatsgridComponent } from './statsgrid/statsgrid.component';
import { NewnavComponent } from './newnav/newnav.component';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { PlayersComponent } from './players/players.component';
import { NgimagesliderComponent } from './ngimageslider/ngimageslider.component';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BoxesComponent,
    FooterComponent,
    NavbarComponent,
    NavigationComponent,
    HisotryComponent,
    SecondbannerComponent,
    NavComponent,
    StatsgridComponent,
    NewnavComponent,
    CaraouselComponent,
    PlayersComponent,
    NgimagesliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
