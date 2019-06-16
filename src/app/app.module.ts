import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhoneformComponent } from './phoneform/phoneform.component';
import { FormsModule } from '@angular/forms';
import { PersonlistComponent } from './personlist/personlist.component';
import { PersoncardComponent } from './personcard/personcard.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import PhoneService from './phone.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhoneformComponent,
    PersonlistComponent,
    PersoncardComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
