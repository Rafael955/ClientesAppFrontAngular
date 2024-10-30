import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent {

  //atributos
  clientes: any[] = []; //array de objetos

  //injeção de dependência
  constructor(
    private httpCLient: HttpClient
  ) {}

  //função executada ao renderizar o componente
  ngOnInit() {
    
    //fazendo a requisição para o ENDPOINT de consulta de clientes
    this.httpCLient.get('http://localhost:5022/api/clientes')
      .subscribe({ //aguardando a resposta da API
        next: (data) => { //capturando os dados obtidos da API
          //armazenando os dados obtidos da API
          this.clientes = data as any[];
        }
      });
  }

  //função para excluir o cliente selecionado na consulta
  onDelete(id: string) {
    //verificar se o usuário deseja realizar a exclusão
    if(confirm('Deseja realmente excluir o cliente selecionado?')) {
      //enviando a requisição de exclusão para a API
      this.httpCLient.delete('http://localhost:5022/api/clientes/' + id)
        .subscribe({
          next: (data: any) => {
            alert(`O cliente ${data.nome} foi excluído com sucesso!`);
            this.ngOnInit(); //recarregando a consulta de clientes
          }
        })
    }
  }

}
