import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  name : string;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   vainas = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor() {
    this.title = 'Jl Jungle';
    this.name = 'xXxXxX';
  }

  eventoClick():void{
    this.name = this.name.toUpperCase();
    this.title = this.title.toUpperCase();
  }
}

