import { Component } from '@angular/core';
import { EventsComponent } from '../events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  public autor: string;
  public titulo: string;
  public anio: number;
  public mostrarEventos: boolean;
  
  constructor(){
    this.autor = "Juan Rulfo";
    this.titulo = "Pedro Parámo";
    this.anio = 2012;
    this.mostrarEventos = true;
  }

  ocultarEventos(): void{
    this.mostrarEventos = false
  }

}