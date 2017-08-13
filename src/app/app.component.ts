import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  name : string;
  votacion="";

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   vainas = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() {
    this.title = 'Jl Jungle';
    this.name = 'xXxXxX';
  }
  votos = [
    {title: 'opcion 1'},
    {title: 'opcion 2'},
    {title: 'opcion 3'},
    {title: 'opcion 4'}
  ]

  addVoto(response:string){
    this.votacion = "escogiste: "+response;
  }
  eventoClick():void{
    this.name = this.name.toUpperCase();
    this.title = this.title.toUpperCase();
  }
}

