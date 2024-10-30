import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent {

  //atributos
  clientes: any[] = []; //array de objetos

  //injeção de dependência
  constructor(
    private httpClient: HttpClient
  ) {}

  //função executada ao renderizar o componente
  ngOnInit() {

    //fazendo a requisição para o ENDPOINT de consulta de clientes
    this.httpClient.get('http://localhost:5022/api/clientes')
    .subscribe({ //aguardando a resposta da API
      next: (data) => { //capturando os dados obtidos da API
        console.log(data); //imprimindo no console
      }
    });

  }

}
