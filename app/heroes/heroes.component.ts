import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import{HEROES} from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: string = 'NvG';
  // hero: Hero = {
  // 	id: 1,
  // 	name: 'NvG'
  // };
  hero = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void{
  	this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
