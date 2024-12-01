import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroForm: FormGroup;
  nombre: FormControl;
  apellido: FormControl;
  edad: FormControl;

  constructor(){
    this.nombre = new FormControl('');
    this.apellido = new FormControl('');
    this.edad = new FormControl(0);

    this.registroForm = new FormGroup({
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
    });

  }

  handleSave(): void{
    console.log("***Datos del formulario***")
    console.log(this.registroForm.value)
  }

}
