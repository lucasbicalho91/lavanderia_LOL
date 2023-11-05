import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    PaginaInicialComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LavanderiaModule { }
