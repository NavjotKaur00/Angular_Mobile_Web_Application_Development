import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NavjotKaur } from '../NavjotKaur';
import { MYSHERIDANINFO } from 'src/assets/data/NavjotKaur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() da!: NavjotKaur[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
