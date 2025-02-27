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
  nuevoLibro: ILibro = { titulo: "", autor: "", url: "", descripcion: "", fechaPublicacion: ""}
  @Output() formularioEnviado: EventEmitter<ILibro> = new EventEmitter();

  agregar() {
    if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor || !this.nuevoLibro.url || !this.nuevoLibro.descripcion || !this.nuevoLibro.fechaPublicacion) {
      alert("Todos los campos son obligatorios");
      return;
    }

    this.formularioEnviado.emit(this.nuevoLibro);
    this.nuevoLibro = {
      titulo: "",
      autor: "",
      url: "",
      descripcion: "",
      fechaPublicacion: ""
    };
  }

}
