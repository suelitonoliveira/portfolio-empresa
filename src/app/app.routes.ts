import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'sobre', component: SobreComponent },
];
