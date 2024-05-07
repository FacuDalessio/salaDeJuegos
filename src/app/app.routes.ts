import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { MayorMenorComponent } from './componentes/mayor-menor/mayor-menor.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'quienSoy', component: QuienSoyComponent },
    { path: 'ahorcado', component: AhorcadoComponent,
        ...canActivate(()=> redirectUnauthorizedTo(['/login']))
    },
    { path: 'mayorMenor', component: MayorMenorComponent,
    ...canActivate(()=> redirectUnauthorizedTo(['/login']))
    }
];
