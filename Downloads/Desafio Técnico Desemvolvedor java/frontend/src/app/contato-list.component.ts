import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato, ContatoService } from './contato.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contato-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css'],
  providers: []
})
export class ContatoListComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private service: ContatoService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.list().subscribe(data => (this.contatos = data));
  }

  editar(id: number) {
    this.router.navigate(['/contatos', id, 'editar']);
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir?')) {
      this.service.remove(id).subscribe(() => this.load());
    }
  }
}