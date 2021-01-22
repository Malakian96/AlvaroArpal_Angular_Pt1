import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mon';
  name='Álvaro';
  surname='Arpal';
  titolTaula='Llistat Pràctica Angular';
  retornarNameSurname(){
    return this.name+' '+this.surname;
  }
}
