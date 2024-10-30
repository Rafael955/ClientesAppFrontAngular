import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar', //seletor para exibir o componente em HTML
  standalone: true, //coponente independente
  imports: [
    RouterLink
  ], //importar bibliotecas ou outros componentes
  templateUrl: './navbar.component.html', //define a pagina HTML do componente
  styleUrl: './navbar.component.css' //defone a folha de estilos CSS do componente
})
export class NavbarComponent {

}
