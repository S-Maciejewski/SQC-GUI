import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MaterialModule } from './material.module';
import { ScenarioComponent } from './components/scenario/scenario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScenarioComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
