import { Component } from '@angular/core';
import { Logger } from 'src/services/Logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn-angular';

  constructor (private logger: Logger) {}

  handleLog() {
    this.logger.log('Hello')
  }
}
