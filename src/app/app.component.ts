import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera Aplicación con Angular 4!!';
  listo = true;
  constructor(){
    
    function Hola(){
      alert("hola");

    }
  }
}
