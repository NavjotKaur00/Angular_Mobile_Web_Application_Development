import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Bk } from '../NavjotKaur';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {


  @Input() bf!: Bk[];

  constructor() { }

  ngOnInit(): void {
  }

}
