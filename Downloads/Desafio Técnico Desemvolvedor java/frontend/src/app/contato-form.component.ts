import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato, ContatoService } from './contato.service';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contato-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {
  form!: FormGroup;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private service: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: [''],
      observacoes: ['']
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.service.get(this.id).subscribe(c => this.form.patchValue(c));
      }
    });
  }

  save() {
    if (this.form.invalid) return;
    const contato: Contato = this.form.value;
    if (this.id) {
      this.service.update(this.id, contato).subscribe(() => this.router.navigate(['/contatos']));
    } else {
      this.service.create(contato).subscribe(() => this.router.navigate(['/contatos']));
    }
  }

  cancel() {
    this.router.navigate(['/contatos']);
  }
}