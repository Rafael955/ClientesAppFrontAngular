import { RouterOutlet, Routes } from '@angular/router';
import { CadastrarClientesComponent } from './components/pages/cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './components/pages/consultar-clientes/consultar-clientes.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'pages/cadastrar-clientes', //ROTA
        component: CadastrarClientesComponent //COMPONENTE
    },
    {
        path: 'pages/consultar-clientes', //ROTA
        component: ConsultarClientesComponent //COMPONENTE
    }
];
