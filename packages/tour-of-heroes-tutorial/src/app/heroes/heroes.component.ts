import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService) {}

  getHeroes() {
    return this.heroService.getHeroes()
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
