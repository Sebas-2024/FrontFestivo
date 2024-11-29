import { Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { VerificarFestivosComponent } from './features/componentes/verificar-festivos/verificar-festivos.component';
import { ListarFestivoComponent } from './features/componentes/listar-festivo/listar-festivo.component';

export const routes: Routes = [
    { path:"inicio", component: InicioComponent },
    { path:"verificar-festivos", component: VerificarFestivosComponent },
    { path:"listar-festivo", component: ListarFestivoComponent },
];
