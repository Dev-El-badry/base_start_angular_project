import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateConfigModule } from './translate-config.module';

//services
import { TranslateConfigService } from './shared/translate-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateConfigModule
  ],
  providers: [TranslateConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
