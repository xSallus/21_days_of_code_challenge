<script setup lang="ts">
import { forecast } from '../composables/weather'

import { formatWeatherName } from '../utils/formatter'
</script>

<template>
  <div class="forecast-info__container">
    <h1>
      🥵&nbsp;
      <span>{{ forecast.name }}</span>
    </h1>

    <div
      class="forecast-weather__container"
      v-for="weather of forecast.weather"
      :key="weather.id"
    >
      <img :src="'http://openweathermap.org/img/w/' + weather?.icon + '.png'" />
      <p>{{ formatWeatherName(weather.description) }}</p>
      <span>{{ weather.main }}</span>
    </div>

    <div>
      <div class="forecast-temperature__info">
        <p>Temperature: {{ forecast.main.temp }} F°</p>

        <p>Max. Temperature: {{ forecast.main.temp_max }} F°</p>

        <p>Min. Temperature: {{ forecast.main.temp_min }} F°</p>

        <p>Feels like: {{ forecast.main.feels_like }} F°</p>
      </div>

      <div class="forecast-environment__info">
        <span> Humidity: {{ forecast.main.humidity }}% </span>
        <span> Pressure: {{ forecast.main.pressure }} Atm </span>
      </div>

      <div class="forecast-wind__info">
        <span>Wind</span>
        <span>
          {{ forecast.wind.speed }} km/h &nbsp;-&nbsp;
          {{ forecast.wind.deg }} deg
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.forecast {
  &-info__container {
    position: relative;

    width: 400px;
    max-width: 90vw;
    padding: 1.5rem 3rem;
    margin-bottom: 5rem;
    background-color: $card-bg;
    border-radius: 6px;

    animation: SHOWUP 2s 1 $smooth;

    h1 {
      font-size: 1.5rem;

      span {
        font-size: 1.75rem;
      }
    }
  }

  &-weather__container {
    width: 100%;
    height: 4.5rem;
    margin-top: 3rem;

    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 'icon desc' 'icon main';

    img {
      height: 3rem;
      width: 3rem;
      grid-area: icon;
      margin: 0 auto;
    }

    p {
      font-size: 2rem;
      width: fit-content;
      grid-area: desc;
    }

    span {
      font-size: 0.95rem;
      display: block;
      text-align: left;
      grid-area: main;
    }
  }

  &-temperature__info {
    width: 100%;
    margin-bottom: 1.5rem;

    p {
      text-align: left;
      font-size: 1.05rem;
    }
  }

  &-environment__info {
    width: fit-content;
    margin-bottom: 2rem;

    display: flex;
    justify-content: flex-start;
    gap: 2rem;
  }

  &-wind__info {
    width: fit-content;
    margin-top: -1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0rem;
  }
}
</style>
