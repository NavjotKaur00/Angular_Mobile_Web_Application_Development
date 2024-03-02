import { Component } from '@angular/core';
import { Bk, Bs } from './NavjotKaur';
import { NavjotKaur } from './NavjotKaur';
import { ServiceService } from './service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NavjotKaurA4';

  bki!: Bk[];
  bsi!: Bs[];
   info!: NavjotKaur[];

  constructor(private x: ServiceService)
  {
this.bki=this.x.getBki();
this.bsi=this.x.getBsi();
this.info=this.x.getMyinfo();
console.log(this.bki, this.bsi, this.info);
  }
}
