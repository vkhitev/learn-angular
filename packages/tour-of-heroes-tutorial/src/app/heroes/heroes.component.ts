import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroModel } from '../hero-form/hero-form.component'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  initialHero = {
    name: '',
    power: '',
    alterEgo: '',
  }

  heroes: Hero[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }

  getHeroes() {
    return this.heroService.getHeroes()
  }

  save(hero: HeroModel): void {
    this.heroService.addHero(hero).subscribe(hero => {
      this.heroes.push(hero)
    })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id).subscribe()
  }
}
