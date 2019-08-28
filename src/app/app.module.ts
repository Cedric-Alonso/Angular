import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseAngularComponent } from './base-angular/base-angular.component';

const routes: Routes = [
{path: '', component: BaseAngularComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BaseAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
