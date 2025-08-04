<script setup lang="ts">
import CoffeeBrands from '@/components/CoffeeBrands.vue';
import CoffeeCategories from '@/components/CoffeeCategories.vue';
import CoffeeCountries from '@/components/CoffeeCountries.vue';
</script>

<template>
  <div class="container">
    <section class="hero">
      <video class="hero__video" autoplay muted loop playsinline>
        <source src="@/assets/videos/hero-cafe.webm" type="video/webm" />
        Seems, that your browser does not support video
      </video>
      <div class="hero__content">
        <h2>Your morning tradition starts here.</h2>
      </div>
    </section>

    <CoffeeCategories />

    <CoffeeBrands />

    <CoffeeCountries />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0;
}

.hero {
  height: 400px;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: $breakpoint-md) {
    height: 500px;
  }

  @media (min-width: $breakpoint-lg) {
    height: 600px;
  }
}

.hero__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.4);
}

.hero__content h2 {
  font-size: 22px;
  padding: 0 10px;
}
</style>
