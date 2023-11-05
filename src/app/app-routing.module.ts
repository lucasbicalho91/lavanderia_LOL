import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './lavanderia/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './lavanderia/login/login.component';
import { CadastroComponent } from './lavanderia/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
