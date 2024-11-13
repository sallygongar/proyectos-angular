import { Component, OnInit, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent implements OnInit, DoCheck {
  title = 'app-libros';
  public autor: string;
  public titulo: string;
  public anio: number;
  public mensaje: string;

  constructor(){
    /* El constructor es donde se carga información, a las propiedades de la clase, 
    no debe haber logica */
    this.autor = "Juan Rulfo";
    this.titulo = "Pedro Parámo";
    this.anio = 2019;
    this.mensaje = "";
  
    console.log("CONSTRUCTOR LANZADO!!!")
  }

  ngOnInit(): void {
    /*Aqui se puede cargar logica*/
    console.log("COMPONENTE LANZADO")
  }

  ngDoCheck(): void {
     /* Se ejecuta cada vez que se produce un cambio en el componente */
     console.log("DO CHECK LANZADO")
  }
 
  addCart(): void {
    this.mensaje = "Libro agregado a carrito"
  }

}
