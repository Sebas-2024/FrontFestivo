import { Component } from '@angular/core';


import { FestivoService } from '../../../services/festivo.service';
@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivos.component.html',
  styleUrls: ['./verificar-festivos.component.scss']
})
export class VerificarFestivoComponent {
  ano: number = 2023;  // Año por defecto
  mes: number = 1;     // Mes por defecto
  dia: number = 1;     // Día por defecto
  respuesta: string = '';

  constructor(private festivoService: FestivoService) {}

  verificarFecha() {
    this.festivoService.verificarFestivo(this.ano, this.mes, this.dia).subscribe(
      (respuesta: string) => {
        this.respuesta = respuesta;
      },
      (error) => {
        this.respuesta = 'Error al verificar la fecha';
        console.error(error);
      }
    );
  }
}

