import { Component } from '@angular/core';
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

}
