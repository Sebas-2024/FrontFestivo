import { Component } from '@angular/core';

import { FestivoService } from 'src/app/services/festivo.service';

@Component({
  selector: 'app-verificar-festivo',
  templateUrl: './verificar-festivo.component.html',
  styleUrls: ['./verificar-festivo.component.scss'],
})
export class VerificarFestivoComponent {
  anio!: number;
  mes!: number;
  dia!: number;
  resultado!: string;

  constructor(private festivoService: FestivoService) {}

  verificar(): void {
    this.festivoService.verificarFestivo(this.anio, this.mes, this.dia).subscribe(
      (response) => (this.resultado = response),
      (error) => (this.resultado = 'Error al verificar la fecha.')
    );
  }
}
