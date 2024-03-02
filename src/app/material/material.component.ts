import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Bk } from '../NavjotKaur';
import { Bs } from '../NavjotKaur';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @Input() bf!: Bk[];
  @Input() bs!: Bs[];


  constructor() { }

  ngOnInit(): void {
  }

}
