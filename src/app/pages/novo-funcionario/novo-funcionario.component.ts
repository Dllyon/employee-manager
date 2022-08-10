import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {

  public formulario: FormGroup;
  private service: FuncionarioService;
  private router: Router;

  constructor(formBuilder: FormBuilder, service: FuncionarioService, router: Router) {
    this.formulario = formBuilder.group({
      nome: [''],
      email: [''],
      cargo: [''],
      salario: [''],
      foto: ['']
    });
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    let funcionario: Funcionario = this.formulario.value;
    this.service.criarNovoFuncionario(funcionario).then(res => {
      this.router.navigate(["/home"]);
    })
  }
}
