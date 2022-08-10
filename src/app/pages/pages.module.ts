import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaFuncionariosComponent } from './tabela-funcionarios/tabela-funcionarios.component';
import { NovoFuncionarioComponent } from './novo-funcionario/novo-funcionario.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioService } from '../services/funcionario.service';
import { EditaFuncionarioComponent } from './edita-funcionario/edita-funcionario.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TabelaFuncionariosComponent,
    NovoFuncionarioComponent,
    PaginaErroComponent,
    EditaFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    TabelaFuncionariosComponent,
    NovoFuncionarioComponent,
    PaginaErroComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class PagesModule { }
