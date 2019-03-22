import {City} from "./city.model";
import {WeatherConditions, WeatherConditionsAdapter} from "./weather-conditions.model";
import {Adapter} from "../../core/adapter";

export class CityForecast {
  constructor(
    public city_id: number,
    public futureConditions: WeatherConditions[]
  ) {
  }
}

export class CityForecastAdapter implements Adapter<CityForecast> {
  adapt(input: any): CityForecast {
    let weatherConditionsAdapter = new WeatherConditionsAdapter();
    let conditionsArray: WeatherConditions[] = [];
    let counter = 0;
    for (let item of input.list) {
      if (counter % 8 === 0) {
        let conditions = weatherConditionsAdapter.adapt(item);
        conditionsArray.push(conditions);
      }
      counter++;
    }
    console.log(conditionsArray);
    let cityForecast = new CityForecast(
      input.city.id,
      conditionsArray
    );
    console.log(cityForecast);
    return cityForecast
  }
}
