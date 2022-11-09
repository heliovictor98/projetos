import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  service: any;

  transferir($event: any){
    this.service.adicionar($event);

  }

  title = 'bytbanck';
}
