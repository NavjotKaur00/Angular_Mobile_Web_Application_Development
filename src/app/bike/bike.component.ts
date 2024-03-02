import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Bs } from '../NavjotKaur';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  @Input() bs!: Bs[];

  constructor() { }

  ngOnInit(): void {
  }

}
