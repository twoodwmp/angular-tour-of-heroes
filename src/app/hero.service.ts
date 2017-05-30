import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROLIST } from './mock-hero-data';

@Injectable()

export class HeroService {
    getHeroList(): Promise<Hero[]> {
        return Promise.resolve(HEROLIST);
    }
    
    getHero(id: number): Promise<Hero> {
        return this.getHeroList().then(heroes => heroes.find(hero => hero.id === id));
    }
}