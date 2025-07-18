import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuAbierto = false;
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}