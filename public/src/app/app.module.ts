import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SteakService } from './steak.service';
import { DisplaysteakComponent } from './displaysteak/displaysteak.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaysteakComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SteakService],
  bootstrap: [AppComponent]
})
export class AppModule { }
