import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // ici, j'importe du fichier d'environnement mes variables https://rapidapi.com/KirylBokiy/api/openweather43/
  // je passe en params les différentes query que je recherche
  // j'utilise TS, donc je type mes données en utilisant un modele https://transform.tools/json-to-typescript
  // on importe le model WeatherData, et la réponse de l'API sera une instance de class
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', environment.appid)
      .set('appid', environment.appid)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
