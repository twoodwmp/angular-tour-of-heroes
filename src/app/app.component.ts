import { Component, Input } from '@angular/core'
import { Hero } from './hero'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heroes">Hero Editor</a>
            <a routerLink="/dashboard">Hero Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title: string;

    constructor(){
    this.title = 'Tour of Heroes';
  }
}