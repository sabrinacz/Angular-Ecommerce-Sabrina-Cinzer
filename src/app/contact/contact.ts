import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  onSubmit(form: any) {
    if (form.valid) {
      alert('¡Mensaje enviado correctamente!');
      form.resetForm();
    }
  }
  sendForm () {
    alert('¡Mensaje enviado correctamente!');
  }

  form_state = {
    nombre: '',
    email: '',
    mensaje: ''
  }
} 
