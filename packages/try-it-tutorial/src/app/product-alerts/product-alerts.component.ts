import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Input } from '@angular/core'
import { Product } from '../products'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product

  @Output() notify = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}
}
