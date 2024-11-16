import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit, DoCheck, OnDestroy{
  
  public autor: string;
  public titulo: string;
  public anio: number;
 
  constructor(){
    this.autor = "Juan Rulfo";
    this.titulo = "Pedro Parámo";
    this.anio = 2012;
    
    console.log("EL CONSTRUCTOR SE EJECUTA PRIMERO")
  }
  
  ngOnInit(): void {
    /* AQUI SE PUEDE CARGAR LOGICA */
    console.log("ngOnInit LANZADO")
  }

  ngDoCheck(): void {
    /* Se ejecuta cada vez que se produce un cambio en el componente */
    console.log("ngDoCheck LANZADO")
  }

  ngOnDestroy(): void {
    /* Se ejecuta cuando el componente se va a eliminar del DOM */
    console.log("ngOnDestroy LANZADO, componente EVENTO Eliminado")
  }
}
