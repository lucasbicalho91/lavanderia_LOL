import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    PaginaInicialComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LavanderiaModule { }
