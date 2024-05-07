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
    { path: 'home',
        loadComponent: () => import('./componentes/home/home.component').then(c => c.HomeComponent) 
    },
    { path: 'login',
        loadComponent: () => import('./componentes/login/login.component').then(c => c.LoginComponent) 
    },
    { path: 'registro',
        loadComponent: () => import('./componentes/registro/registro.component').then(c => c.RegistroComponent)
    },
    { path: 'quienSoy',
        loadComponent: () => import('./componentes/quien-soy/quien-soy.component').then(c => c.QuienSoyComponent)
    },
    { path: 'ahorcado',
        loadComponent: () => import('./componentes/ahorcado/ahorcado.component').then(c => c.AhorcadoComponent),
        ...canActivate(()=> redirectUnauthorizedTo(['/login']))
    },
    { path: 'mayorMenor',
        loadComponent: () => import('./componentes/mayor-menor/mayor-menor.component').then(c => c.MayorMenorComponent),
        ...canActivate(()=> redirectUnauthorizedTo(['/login']))
    }
];
