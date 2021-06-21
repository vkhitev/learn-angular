import { Location } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Hero } from '../hero'
import { HeroModel } from '../hero-form/hero-form.component'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const heroId = parseInt(this.route.snapshot.paramMap.get('heroId')!, 10)

    this.heroService.getHeroNo404(heroId).subscribe(hero => {
      this.hero = hero
    })
  }

  goBack(): void {
    this.location.back()
  }

  save(hero: HeroModel): void {
    if (this.hero) {
      this.heroService.updateHero({ ...hero, id: this.hero.id }).subscribe(() => {
        this.goBack()
      })
    }
  }
}
