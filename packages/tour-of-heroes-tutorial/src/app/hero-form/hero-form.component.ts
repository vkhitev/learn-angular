import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

type HeroModel = Omit<Hero, 'id'>
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  @Output() notify = new EventEmitter<Hero>()

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']

  initialModel: HeroModel = {
    name: '',
    power: this.powers[0],
    alterEgo: '',
  }

  model: HeroModel = { ...this.initialModel }

  submitted = false

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true

    this.heroService.addHero(this.model).subscribe(hero => {
      this.notify.emit(hero)
    })
  }
}
