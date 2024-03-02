import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NavjotKaur } from '../NavjotKaur';
import { MYSHERIDANINFO } from 'src/assets/data/NavjotKaur';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

   @Input() da!: NavjotKaur[]; 

  

  constructor() { }

     ngOnInit(): void {
  }

  }


