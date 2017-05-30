import { Component, NgModule, OnInit } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Hero } from "./hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroListComponent implements OnInit  { 
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  
  /// Initialization lifecycle hook
  ngOnInit(): void {
    this.getHeroList();
  }

  /// Handler entry for New hero button click
  btnNewHeroHandler(newHeroName: string) {
    this.addHero(newHeroName);
  }

  /// pushes new hero onto hero list model
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(new Hero(this.heroes.length, newHero));
    }
  }

  /// Handler entry method for hero list selection
  liSelectHeroHandler(selection: Hero): void {
    if (selection) {
      this.setSelectedHero(selection);
    }
  }

  /// Updates model with selection, tells view to reflect selection
  setSelectedHero(hero: Hero) {
    if (hero) {
      this.selectedHero = hero;
    }
  }

  getHeroList(): void {
    this.heroService.getHeroList().then(heroes => this.heroes = heroes);
  }

}
