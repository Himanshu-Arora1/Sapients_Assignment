import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { FilterSpacexComponent } from './main/filter-spacex/filter-spacex.component';
import { Routes, RouterModule } from '@angular/router';
import { MissionCardComponent } from './main/mission-card/mission-card.component';

const appRoutes: Routes  = [
  { path: '', component: MainComponent,  children: [
      { path: ':year', component: MissionCardComponent }
  ]},
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    FilterSpacexComponent,
    MissionCardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
