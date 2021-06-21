import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  @Output() notify = new EventEmitter<Hero>()

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  add(name: string): void {
    const trimmedName = name.trim()
    if (trimmedName === '') {
      return
    }
    this.heroService
      .addHero({
        name: trimmedName,
        power: 'Power',
        alterEgo: 'Alter Ego',
      })
      .subscribe(hero => {
        this.notify.emit(hero)
      })
  }
}
