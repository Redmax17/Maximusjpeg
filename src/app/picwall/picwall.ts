import { Component } from '@angular/core';
import { PicGetter } from '../pic-getter';

@Component({
  selector: 'app-picwall',
  imports: [],
  templateUrl: './picwall.html',
  styleUrl: './picwall.css',
})
export class Picwall {
  constructor(private picGetter: PicGetter) {
  }
}
