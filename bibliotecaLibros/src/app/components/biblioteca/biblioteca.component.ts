import { Component, Input } from '@angular/core';
import { ILibro } from '../../interfaces/ilibro.interface';

@Component({
  selector: 'app-biblioteca',
  imports: [],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  @Input() libros: ILibro[] = [];
  libro: string = ""

  ngOnChanges() {
    this.libro = ""
    this.libros.forEach(libro => {
      this.libro += `<figure class="portada"> 
        <img src="${libro.url}" alt="${libro.titulo}"> 
        <h3>${libro.titulo}</h3>
        <p>Autor: <strong>${libro.autor}</strong></p>
        <p>Descripción: ${libro.descripcion}</p>
        <p>Fecha de publicación: <em>${libro.fechaPublicacion}</em></p>
      </figure>`
    })
  }

}
