import {Adapter} from "../../core/adapter";

export class WeatherConditions {
  constructor(
    public dt: Date,
    public shortDescription: string,
    public longDescription: string,
    public icon: string,
    public temp: number,
    public tempMin: number,
    public tempMax: number,
    public pressure: number,
    public humidity: number,
    public windSpeed: number,
    public windDir: number,
    public cloudCoverage: number,
  ) {
  }
}

export class WeatherConditionsAdapter implements Adapter<WeatherConditions> {
  adapt(input: any): WeatherConditions {
    let icon: string;
    switch (input.weather[0].main) {
      case 'Thunderstorm':
        icon = '4102318 - cloud heavy rain rain storm thunderbolt thunderstorm weather.png';
        break;
      case 'Drizzle':
        icon = '4102316 - cloud drizzle rain weather.png';
        break;
      case 'Rain':
        icon = '4102320 - cloud heavy rain rain weather.png';
        break;
      case 'Snow':
        icon = '4102323 - cloud cold snow weather.png';
        break;
      case 'Clear':
        icon = '4102328 - hot sun weather.png';
        break;
      default:
        icon = '4102315 - cloud weather.png';
    }
    let dt = new Date(0);
    dt.setUTCSeconds(input.dt);
    return new WeatherConditions(
      dt,
      input.weather[0].main,
      input.weather[0].description,
      icon,
      input.main.temp,
      input.main.temp_min,
      input.main.temp_max,
      input.main.pressure,
      input.main.humidity,
      input.wind.speed,
      input.wind.deg,
      input.clouds.all
    )
  }
}
