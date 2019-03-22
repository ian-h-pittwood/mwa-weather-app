import {WeatherConditions, WeatherConditionsAdapter} from "./weather-conditions.model";
import {Adapter} from "../../core/adapter";

export class City {
  constructor(
    public coordinates: [number, number],
    public currentConditions: WeatherConditions,
    public id: number,
    public name: string
  ) {
  }
}

export class CityAdapter implements Adapter<City> {
  adapt(input: any): City {
    let weatherConditionsAdapter = new WeatherConditionsAdapter();
    return new City(
      [input.coord.lon, input.coord.lat],
      weatherConditionsAdapter.adapt(input),
      input.id,
      input.name
    )
  }
}
