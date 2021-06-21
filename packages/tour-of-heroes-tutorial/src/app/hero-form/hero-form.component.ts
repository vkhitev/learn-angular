import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Hero } from '../hero'

export type HeroModel = Omit<Hero, 'id'>

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  @Output() notify = new EventEmitter<HeroModel>()

  @Input() initialModel!: HeroModel

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']

  model!: HeroModel

  constructor() {}

  ngOnInit(): void {
    this.model = {
      name: this.initialModel.name,
      power: this.initialModel.power || this.powers[0],
      alterEgo: this.initialModel.alterEgo || '',
    }
  }

  onSubmit() {
    this.notify.emit(this.model)
  }
}
