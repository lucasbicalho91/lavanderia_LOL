import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LavanderiaModule } from './lavanderia';
import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LavanderiaModule,
    ClienteModule,
    FuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
