import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice', power: 'Power', alterEgo: 'Alter Ego' },
      { id: 12, name: 'Narco', power: 'Power' },
      { id: 13, name: 'Bombasto', power: 'Power' },
      { id: 14, name: 'Celeritas', power: 'Power' },
      { id: 15, name: 'Magneta', power: 'Power' },
      { id: 16, name: 'RubberMan', power: 'Power' },
      { id: 17, name: 'Dynama', power: 'Power' },
      { id: 18, name: 'Dr IQ', power: 'Power' },
      { id: 19, name: 'Magma', power: 'Power' },
      { id: 20, name: 'Tornado', power: 'Power' },
    ]
    return { heroes }
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
