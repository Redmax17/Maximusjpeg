import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Picwall } from '../picwall/picwall';

@Component({
  selector: 'app-homepage',
  imports: [Navbar, Picwall],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage { }
