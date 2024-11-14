import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  public mensaje: string;

  constructor(){
    this.mensaje = "";
  }
  
  addCart(): void {
    this.mensaje = "Libro agregado a carrito"
  }
}
