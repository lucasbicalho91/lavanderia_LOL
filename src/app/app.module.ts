import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './lavanderia/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './lavanderia/login/login.component';
import { CadastroComponent } from './lavanderia/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
