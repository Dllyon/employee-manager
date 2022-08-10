import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-edita-funcionario',
  templateUrl: './edita-funcionario.component.html',
  styleUrls: ['./edita-funcionario.component.css']
})
export class EditaFuncionarioComponent implements OnInit {

  private service: FuncionarioService;
  private router: Router;
  private id: string | undefined;
  public funcionario: Funcionario | null = null;


  constructor(service: FuncionarioService, router: Router, route: ActivatedRoute) {
    this.service = service;
    this.router = router;

    route.params.subscribe(params => {
      this.id = params["id"];
    })
  }

  ngOnInit(): void {
    if(this.id != undefined) {
      this.service.buscarFuncionario(this.id).subscribe(funcionario => {
          this.funcionario = {
            nome: funcionario._delegate._document.data.value.mapValue.fields.nome.stringValue,
            email: funcionario._delegate._document.data.value.mapValue.fields.email.stringValue,
            cargo: funcionario._delegate._document.data.value.mapValue.fields.cargo.stringValue,
            salario: funcionario._delegate._document.data.value.mapValue.fields.salario.integerValue,
            foto: funcionario._delegate._document.data.value.mapValue.fields.foto.stringValue,
        }
        console.log(funcionario);
      });
    }
    else {
      this.router.navigate(["/home"]);
    }
  }

  public onSubmit(): void {
    if (this.id != undefined && this.funcionario != null) {
      let funcionario: Funcionario = this.funcionario;
      console.log(funcionario);
      this.service.editarFuncionario(this.id, funcionario).then(res => {
        this.router.navigate(["/home"]);
      })
    }
  }

}
