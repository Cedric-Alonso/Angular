import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseAngularComponent } from './componements/base-angular/base-angular.component';
import { TestComponent } from './componements/test/test.component';
import { LoginComponent } from './componements/login/login.component';
import { HightlightDirective } from './directives/hightlight.directive';

const routes: Routes = [
{path: '', component: TestComponent},
{ path: 'login', component: LoginComponent},
{path: 'test', component: TestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BaseAngularComponent,
    TestComponent,
    LoginComponent,
    HightlightDirective,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
 }
