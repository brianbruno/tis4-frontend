import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-buscar-aluno',
  templateUrl: './buscar-aluno.component.html',
  styleUrls: ['./buscar-aluno.component.css']
})
export class BuscarAlunoComponent {

  buscando = false;
  nomealuno = '';
  resultado = [
    {
      'nome': 'Brian Bruno',
      'idade': '19',
      'nomeMae': 'Angela',
      'telefone': '31 992170109',
      'endereco': 'Rua das Aboboras, Contagem - MG'
    },
    {
      'nome': 'Brian Gabriel',
      'idade': '17',
      'nomeMae': 'Luciana',
      'telefone': '31 25856989',
      'endereco': 'Rua dos Morangos, Belo Horizonte - MG'
    }
  ];

  constructor(public snackBar: MatSnackBar) { }

  pesquisar() {
    const self = this;
    if (this.nomealuno.length > 3) {
      this.mostrarMensagem('Aguarde...');
      this.buscando = true;
      setTimeout(function () {
        self.buscando = false;
      }, 2000);
    }
  }

  mostrarMensagem(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }

}
