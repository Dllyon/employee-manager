import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable()
export class FuncionarioService {

  constructor(private firestore: AngularFirestore) {}

  buscarTodosFuncionarios(): Observable<any> {
    return this.firestore.collection('funcionarios').snapshotChanges();
  }

  buscarFuncionario(id: string): Observable<any> {
    return this.firestore.collection('funcionarios').doc(id).get();
  }

  criarNovoFuncionario(f: Funcionario): Promise<any> {
    return this.firestore.collection('funcionarios').add(f);
  }

  excluirFuncionario(id: string): Promise<any> {
    return this.firestore.collection('funcionarios').doc(id).delete();
  }

  editarFuncionario(id: string, funcionario: Funcionario): Promise<any> {
    return this.firestore.collection('funcionarios').doc(id).update(funcionario);
  }
}
