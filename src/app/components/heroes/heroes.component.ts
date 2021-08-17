import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import {HEROES} from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;//создаём переменную и присваиваем ей фиктивных героев из mock-heroes.ts
  selectedHero?: Hero; //создаём переменную selectedHero, но не присваиваем ей значение, чтобы при запуске браузера не отображался герой

  constructor() { }

  ngOnInit(): void {}

  //по нажатию на героя перемнной selectedHero присваивается выбраный герой
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
