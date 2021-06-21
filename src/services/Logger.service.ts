import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class Logger {
  log(value: any) {
    console.log(value)
  }
}
