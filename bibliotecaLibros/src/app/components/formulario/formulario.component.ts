import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ILibro } from '../../interfaces/ilibro.interface';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nuevoLibro!: ILibro;
  @Output() envioLibro: EventEmitter<ILibro> = new EventEmitter();

  obtenerLibro() {
    this.envioLibro.emit(this.nuevoLibro);
    this.nuevoLibro = {
      titulo: "",
      autor: "",
      url: "",
      descripcion: "",
      fechaPublicacion: ""
    }
  }

}
