<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import dunkinIcon from '@/assets/images/brands/dunkin.svg';
import peetIcon from '@/assets/images/brands/peet.svg';
import illyIcon from '@/assets/images/brands/illy.svg';
import jacobsIcon from '@/assets/images/brands/jacobs.svg';
import starbucksIcon from '@/assets/images/brands/starbucks.svg';
import keurigIcon from '@/assets/images/brands/keurig.svg';
import lavazzaIcon from '@/assets/images/brands/lavazza.svg';
import highlandsIcon from '@/assets/images/brands/highlands.svg';
import nespressoIcon from '@/assets/images/brands/nespresso.svg';
import tchiboIcon from '@/assets/images/brands/tchibo.svg';

const brands = [
  { name: 'Dunkin', logo: dunkinIcon, link: 'https://www.dunkindonuts.com/' },
  { name: 'Peet', logo: peetIcon, link: 'https://www.peets.com/' },
  { name: 'Illy', logo: illyIcon, link: 'https://www.illy.com/en-ww' },
  { name: 'Jacobs', logo: jacobsIcon, link: 'https://www.jacobscoffee.com/' },
  { name: 'Starbucks', logo: starbucksIcon, link: 'https://www.starbucks.com/' },
  { name: 'Keurig', logo: keurigIcon, link: 'https://www.keurig.com/' },
  { name: 'Lavazza', logo: lavazzaIcon, link: 'https://www.lavazza.com/en' },
  {
    name: 'Highlands',
    logo: highlandsIcon,
    link: 'https://www.highlandscoffee.com.vn/en/coffee.html',
  },
  { name: 'Nespresso', logo: nespressoIcon, link: 'https://www.nespresso.com/us/' },
  { name: 'Tchibo', logo: tchiboIcon, link: 'http://tchibo.com/' },
];

const swiperBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1440: {
    slidesPerView: 4,
  },
};
</script>

<template>
  <section class="brands">
    <div class="container">
      <h2 class="brands__title title">brands</h2>
      <p class="brands__subtitle subtitle">All Your Favorite Brands Under One Roof</p>
      <Swiper
        class="brands__slider"
        :modules="[Autoplay]"
        :breakpoints="swiperBreakpoints"
        :space-between="15"
        :loop="true"
        :allowTouchMove="false"
        :simulateTouch="false"
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :speed="2000"
      >
        <SwiperSlide v-for="brand in brands" :key="brand.name" class="brands__slide">
          <a :href="brand.link" target="_blank" class="brands__picture">
            <img :src="brand.logo" :alt="brand.name" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brands {
  padding: 20px 0 30px;

  @media (min-width: $breakpoint-md) {
    padding: 30px 0 40px;
  }

  @media (min-width: $breakpoint-lg) {
    padding: 60px 0 80px;
  }

  background-color: #f3ebe1;
}

.brands__title {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.brands__subtitle {
  margin-bottom: 20px;

  @media (min-width: $breakpoint-md) {
    margin-bottom: 30px;
  }

  @media (min-width: $breakpoint-lg) {
    margin-bottom: 50px;
  }
}

.brands__slider {
  width: 100%;
}

.brands__slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brands__picture {
  display: block;
  width: 80px;
  height: 80px;

  @media (min-width: $breakpoint-md) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: $breakpoint-lg) {
    width: 140px;
    height: 140px;
  }

  & img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: contain;

    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(100%);
    }
  }
}
</style>
