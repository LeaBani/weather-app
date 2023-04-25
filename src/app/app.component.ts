import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// je cherche a utiliser le service WeatherApp
// j'implemente OnInit
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService){

  }
  ngOnInit(): void {
    this.weatherService.getWeatherData('Wellington') // on créé une instance de class à l'initialisation du projet
    .subscribe({
      next: (response) => {
        console.log(response);

      }
    })
  }

}
