import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy{

  constructor(){
    console.log("CONSTRUCTOR PELICULA LANZADO!!!")
  }

  ngOnInit(): void {
    console.log("COMPONENTE PELICULA LANZADO");
  }

  ngDoCheck(): void {
    console.log("DO CHECK DE PELICULA LANZADO")
  }

  ngOnDestroy(): void {
    /* Este componente se ejecuta antes que se quite del DOM */
    console.log("EL COMPONENTE PELICULA SE VA A ELIMINAR")
  }

}
