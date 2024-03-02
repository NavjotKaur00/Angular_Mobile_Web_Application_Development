import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { BikeComponent } from './bike/bike.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from'./AngularMaterial/material-ui.module';
import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreakfastComponent,
    BikeComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, ReactiveFormsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
