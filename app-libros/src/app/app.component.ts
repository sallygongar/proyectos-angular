import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  title = 'app-libros';
  public autor: string;
  public titulo: string;
  public anio: number;
  public mensaje: string;
  public mostrarPeliculas: boolean;

  constructor(){
    /* El constructor es donde se carga información, a las propiedades de la clase, 
    no debe haber logica */
    this.autor = "Juan Rulfo";
    this.titulo = "Pedro Parámo";
    this.anio = 2019;
    this.mensaje = "";
    this.mostrarPeliculas = true;
    console.log("CONSTRUCTOR APP LANZADO!!!")
  }

  ngOnInit(): void {
    /*Aqui se puede cargar logica*/
    console.log("COMPONENTE APP LANZADO")
  }

  ngDoCheck(): void {
     /* Se ejecuta cada vez que se produce un cambio en el componente */
     console.log("DO CHECK APP LANZADO")
  }
 
  addCart(): void {
    this.mensaje = "Libro agregado a carrito"
  }

  ngOnDestroy(): void {
    console.log("EL COMPONENTE APP SE VA A ELIMINAR")
  }

  ocultarPeliculas(): void{
    this.mostrarPeliculas = false
  }
}
