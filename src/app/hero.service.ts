import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
/// import { HEROLIST } from './mock-hero-data'; *deprecated

@Injectable()

export class HeroService {
    private heroesURL = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesURL}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesURL, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<Hero> {
        const url = `${this.heroesURL}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(hero => null)
            .catch(this.handleError);
    }

    constructor(private http: Http) { }
    getHeroList(): Promise<Hero[]> {
        return this.http.get(this.heroesURL).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
        ///return Promise.resolve(Heroes);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
    
    getHero(id: number): Promise<Hero> {
        return this.getHeroList().then(heroes => heroes.find(hero => hero.id === id));
    }
}