import { Component, Input } from '@angular/core'
import { Hero } from './hero'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heroes" routerLinkActive="active">Hero Editor</a>
            <a routerLink="/dashboard" routerLinkActive="active">Hero Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: string;

    constructor(){
    this.title = 'Tour of Heroes';
  }
}