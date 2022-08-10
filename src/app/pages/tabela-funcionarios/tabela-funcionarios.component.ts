import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css']
})
export class TabelaFuncionariosComponent implements OnInit {

  public listF: Funcionario[] = [];

  private service: FuncionarioService;

  constructor(service: FuncionarioService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.buscarTodosFuncionarios().subscribe({next: funcionarios => {
      this.listF = [];
      for(let f of funcionarios) {
        this.listF.push({
          id: <string>f.payload.doc.id,
          nome: <string>f.payload.doc.data()['nome'],
          email: <string>f.payload.doc.data()['email'],
          cargo: <string>f.payload.doc.data()['cargo'],
          salario: <number>f.payload.doc.data()['salario'],
          foto: <string>f.payload.doc.data()['foto'],
        });
      }
    }});
  }

  public excluirLinha(id: string | undefined): void {
    if(id != undefined) {
      this.service.excluirFuncionario(id);
    }
  }
}
