import { Routes } from '@angular/router';
import { ContatoListComponent } from './contato-list.component';
import { ContatoFormComponent } from './contato-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: 'contatos', component: ContatoListComponent },
  { path: 'contatos/novo', component: ContatoFormComponent },
  { path: 'contatos/:id/editar', component: ContatoFormComponent }
];
