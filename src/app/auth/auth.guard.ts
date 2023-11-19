import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./services/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      const usuarioLogado = this.loginService.usuarioLogado;
      let url = state.url;
      if (usuarioLogado) {
        if (route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.perfil)===-1) {
          // Se o perfil do usuário não está no perfil da rota
          // vai para login
          this.router.navigate(['/login'],
                { queryParams: { error: "Proibido o acesso a essa página" } });
      return false;
      }
      // em qualquer outro caso, permite o acesso
      return true;
  }
  // se não está logado, vai para o login
  this.router.navigate(['/login'],
             { queryParams: { error: "Deve fazer o login antes de acessar essa página" } });
  return false;

  }
  
}