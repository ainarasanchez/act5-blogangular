import { Component } from '@angular/core';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { BibliotecaComponent } from "./components/biblioteca/biblioteca.component";

@Component({
  selector: 'app-root',
  imports: [FormularioComponent, BibliotecaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bibliotecaLibros';
}
