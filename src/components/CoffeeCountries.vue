<script lang="ts" setup>
import BR from '@/assets/images/countries/BR.webp';
import VN from '@/assets/images/countries/VN.webp';
import CO from '@/assets/images/countries/CO.webp';
import EF from '@/assets/images/countries/EF.webp';
import HO from '@/assets/images/countries/HO.webp';
import IN from '@/assets/images/countries/IN.webp';
import ID from '@/assets/images/countries/ID.webp';
import UG from '@/assets/images/countries/UG.webp';
import GT from '@/assets/images/countries/GT.webp';
import KE from '@/assets/images/countries/KE.webp';
import PE from '@/assets/images/countries/PE.webp';
import MX from '@/assets/images/countries/MX.webp';

const countries = [
  {
    name: 'Brazil',
    beanType: 'Arabica / Robusta',
    flavorProfile: 'Chocolatey, nutty, low acidity',
    notes:
      'The largest coffee exporter in the world. Known for consistent production and smooth flavor.',
    flag: BR,
  },
  {
    name: 'Vietnam',
    beanType: 'Robusta',
    flavorProfile: 'Bitter, strong, earthy',
    notes: 'Top producer of Robusta beans. Often used in instant coffee and espresso blends.',
    flag: VN,
  },
  {
    name: 'Colombia',
    beanType: 'Arabica',
    flavorProfile: 'Caramel, citrus, nutty, balanced',
    notes: 'Famous for high-quality hand-picked beans grown in high altitudes.',
    flag: CO,
  },
  {
    name: 'Ethiopia',
    beanType: 'Arabica (Heirloom varieties)',
    flavorProfile: 'Floral, fruity, wine-like',
    notes:
      'The birthplace of coffee. Known for unique, complex flavor profiles and ancient growing traditions.',
    flag: EF,
  },
  {
    name: 'Honduras',
    beanType: 'Arabica',
    flavorProfile: 'Chocolate, fruity, nutty',
    notes: 'Rapidly growing origin with improved quality and flavor diversity.',
    flag: HO,
  },
  {
    name: 'India',
    beanType: 'Arabica / Robusta',
    flavorProfile: 'Spicy, earthy, bold',
    notes: 'Known for Monsooned Malabar coffee and complex, intense profiles.',
    flag: IN,
  },
  {
    name: 'Indonesia (Sumatra)',
    beanType: 'Arabica / Robusta',
    flavorProfile: 'Herbal, earthy, full-bodied',
    notes: 'Distinct wet-hulled processing gives beans a low-acid, deep taste.',
    flag: ID,
  },
  {
    name: 'Uganda',
    beanType: 'Robusta / Arabica',
    flavorProfile: 'Deep, chocolaty, fruity',
    notes: 'One of Africa’s top producers, especially known for robust Robusta beans.',
    flag: UG,
  },
  {
    name: 'Guatemala',
    beanType: 'Arabica',
    flavorProfile: 'Spicy, chocolatey, citrus',
    notes: 'High-altitude regions and volcanic soil contribute to its rich taste.',
    flag: GT,
  },
  {
    name: 'Kenya',
    beanType: 'Arabica (SL28, SL34)',
    flavorProfile: 'Berry-like, winey acidity, juicy',
    notes: 'Well-known for auction-grade beans and vibrant, juicy flavors.',
    flag: KE,
  },
  {
    name: 'Peru',
    beanType: 'Arabica',
    flavorProfile: 'Nutty, fruity, mild',
    notes: 'Popular for organic, fair-trade coffees with smooth profiles.',
    flag: PE,
  },
  {
    name: 'Mexico',
    beanType: 'Arabica',
    flavorProfile: 'Chocolatey, light-bodied, mild acidity',
    notes: 'Produces a wide range of mild coffees, often from small family farms.',
    flag: MX,
  },
];
</script>

<template>
  <section class="countries">
    <div class="container">
      <h2 class="countries__title title">Countries</h2>
      <p class="countries__subtitle subtitle">From Farm to Cup</p>

      <ul class="countries__list">
        <li v-for="country in countries" :key="country.name" class="countries__item">
          <img class="countries__picture" :src="country.flag" :alt="country.name" />
          <div class="countries__info">
            <h3 class="countries__info-title">{{ country.name }}</h3>
            <span class="countries__info-subtitle"
              ><strong>Beans: </strong>{{ country.beanType }}</span
            >
            <span class="countries__info-subtitle"
              ><strong>Flavour profile: </strong>{{ country.flavorProfile }}</span
            >
            <p class="countries__info-description">{{ country.notes }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.countries {
  padding: 20px 0 30px;

  @media (min-width: $breakpoint-md) {
    padding: 30px 0 40px;
  }

  @media (min-width: $breakpoint-lg) {
    padding: 60px 0 80px;
  }

  background-color: #ffffff;
}

.countries__title {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.countries__subtitle {
  margin-bottom: 20px;

  @media (min-width: $breakpoint-md) {
    margin-bottom: 30px;
  }

  @media (min-width: $breakpoint-lg) {
    margin-bottom: 50px;
  }
}

.countries__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  column-gap: 20px;
  row-gap: 30px;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: $breakpoint-md) {
    justify-content: space-between;
    row-gap: 50px;
  }

  @media (min-width: $breakpoint-lg) {
    justify-content: flex-start;
    column-gap: 50px;
    row-gap: 70px;
  }
}

.countries__item {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 2px 4px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.countries__picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.countries__info {
  background-color: $base-white;
  color: $base-black;
  position: absolute;
  overflow: hidden;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s ease;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.countries__item:hover .countries__info {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.countries__info-title {
  text-align: center;
  margin: 0 0 15px 0;
  color: inherit;
  font-size: 18px;
}

.countries__info-subtitle {
  font-size: 14px;
  margin-bottom: 10px;
}

.countries__info-description {
  margin: 10px 0 0 0;
  font-size: 14px;
}
</style>
