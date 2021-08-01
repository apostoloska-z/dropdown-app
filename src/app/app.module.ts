import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponentComponent } from './components/dropdown-component/dropdown-component.component';
import { CountriesComponentComponent } from './components/countries-component/countries-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponentComponent,
    CountriesComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
