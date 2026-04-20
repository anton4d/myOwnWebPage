import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-portfolio',
  imports: [Header,RouterOutlet,Footer],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {

}
