<script setup lang="ts">
import { ref } from 'vue';

import imgBeans from '@/assets/images/categories/whole-beans.webp';
import imgGround from '@/assets/images/categories/ground-coffee.webp';
import imgInstant from '@/assets/images/categories/instant-coffee.webp';
import imgCapsules from '@/assets/images/categories/coffee-capsules.webp';

const categories = [
  {
    key: 'beans',
    title: 'Whole Beans',
    description: `Whole coffee beans are the purest and freshest form of coffee. Ideal for those who grind their beans just before brewing to unlock maximum aroma and flavor. At our store, we offer a variety of bean types including Arabica, Robusta, Liberica, and Excelsa — each with its unique profile, taste, and origin. Whether you're brewing espresso or pour-over, whole beans provide unmatched control over your cup.`,
    image: imgBeans,
  },
  {
    key: 'ground',
    title: 'Ground Coffee',
    description: `Ground coffee is perfect for those who value both quality and convenience. Pre-ground for different brewing methods — from Turkish coffee to French press and drip machines — it saves time without compromising too much on flavor. It's a great option for everyday coffee lovers who want a consistent and easy brew.`,
    image: imgGround,
  },
  {
    key: 'instant',
    title: 'Instant Coffee',
    description: `Instant coffee is the fastest way to enjoy a cup — just add hot water. It's a great choice for travel, office, or quick mornings. While it lacks the complexity of fresh brews, modern instant coffees offer improved taste and aroma. We also offer popular 3-in-1 options that come pre-mixed with sugar and creamer.`,
    image: imgInstant,
  },
  {
    key: 'capsules',
    title: 'Coffee Capsules',
    description: `Coffee capsules are designed for capsule machines like Nespresso or Dolce Gusto. They offer speed and consistency with minimal cleanup. A variety of flavors and intensities are available, so you can enjoy barista-quality espresso at home with just one button press.`,
    image: imgCapsules,
  },
];

const selectCategory = (category: {
  key: string;
  title: string;
  description: string;
  image: string;
}) => {
  selectedCategory.value = category;
};

const selectedCategory = ref(categories[0]);
</script>

<template>
  <section class="categories">
    <div class="container">
      <h2 class="categories__title title">Categories</h2>
      <p class="categories__subtitle subtitle">Coffee for every taste</p>

      <div class="categories__container">
        <ul class="categories__list">
          <li
            v-for="category in categories"
            :key="category.key"
            :class="{ active: category.key === selectedCategory.key }"
            @click="selectCategory(category)"
          >
            {{ category.title }}
          </li>
        </ul>

        <div class="categories__info">
          <div class="categories__info-wrapper">
            <h3 class="categories__info-title">{{ selectedCategory.title }}</h3>
            <p class="categories__info-description">{{ selectedCategory.description }}</p>
          </div>
          <div class="categories__info-picture">
            <img :src="selectedCategory.image" alt="Category picture." />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.categories {
  padding: 20px 0 30px;

  @media (min-width: $breakpoint-md) {
    padding: 30px 0 40px;
  }

  @media (min-width: $breakpoint-lg) {
    padding: 60px 0 80px;
  }
  background-color: $base-white;
}

.categories__title {
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.categories__subtitle {
  margin-bottom: 20px;

  @media (min-width: $breakpoint-md) {
    margin-bottom: 30px;
  }

  @media (min-width: $breakpoint-lg) {
    margin-bottom: 50px;
  }
}

.categories__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: $breakpoint-md) {
    flex-direction: row;
  }

  @media (min-width: $breakpoint-lg) {
    align-items: center;
  }
}

.categories__list {
  width: 100%;
  margin: 0 0 30px 0;

  @media (min-width: $breakpoint-md) {
    gap: 0;
    width: 30%;
    margin: 0;
    justify-content: space-evenly;
  }

  @media (min-width: $breakpoint-lg) {
    gap: 20px;
  }
  list-style-type: none;

  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.categories__list li {
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  color: $base-black;

  &:hover {
    background-color: $primary-color;
  }

  &.active {
    background-color: $primary-color;
  }

  @media (min-width: $breakpoint-md) {
    padding: 18px;
  }

  @media (min-width: $breakpoint-lg) {
    font-size: 20px;
  }
}

.categories__info {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: $breakpoint-md) {
    width: 60%;
  }

  @media (min-width: $breakpoint-lg) {
    flex-direction: row;
    gap: 0;
  }
}

.categories__info-wrapper {
  width: 100%;

  @media (min-width: $breakpoint-lg) {
    width: 60%;
  }
}

.categories__info-title {
  text-align: center;
  font-size: 20px;
  color: $base-black;
  margin: 0 0 10px 0;

  @media (min-width: $breakpoint-md) {
    font-size: 22px;
  }

  @media (min-width: $breakpoint-lg) {
    font-size: 24px;
  }
}

.categories__info-description {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: $base-black;

  @media (min-width: $breakpoint-lg) {
    font-size: 16px;
  }
}

.categories__info-picture {
  width: 100%;
  height: 300px;

  @media (min-width: $breakpoint-lg) {
    width: 300px;
    height: 200px;
  }

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>
