import { Component, NgModule, OnInit } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit  { 
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }
  
  /// Initialization lifecycle hook
  ngOnInit(): void {
    this.getHeroList();
  }

  /// Handler entry for New hero button click
  btnNewHeroHandler(newHeroName: string) {
    this.addHero(newHeroName);
  }

  /// pushes new hero onto hero list model
  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  deleteHero(hero :Hero) : void {
    this.heroService
      .delete(hero.id)
      .then(herolol => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {this.selectedHero = null}
      });
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

  gotoHeroDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroList(): void {
    this.heroService.getHeroList().then(heroes => this.heroes = heroes);
  }

}
