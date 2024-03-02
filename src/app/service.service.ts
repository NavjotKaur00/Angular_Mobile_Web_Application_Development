import { Injectable } from '@angular/core';
import { Bk } from './NavjotKaur';
import { Bs } from './NavjotKaur';
import { NavjotKaur } from './NavjotKaur';
import { MYSHERIDANINFO } from 'src/assets/data/NavjotKaur';
import bki from '../assets/data/breakfast.json';
import  bsi from '../assets/data/bikeshare.json';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getBki(): Bk[] { return bki.breakfast; }
  getBsi(): Bs[] { return bsi; }
  getMyinfo(): NavjotKaur[] {return MYSHERIDANINFO;}

  constructor() { }
}
