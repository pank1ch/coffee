<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleResize = (evt: Event) => {
  const width = (evt.target as Window).innerWidth;

  if (width >= 768) isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <header class="page-header">
    <div class="container">
      <h1 class="visually-hidden">Coffee Shop</h1>
      <nav class="page-nav">
        <div class="page-nav__logo">
          <a href="#">
            <picture>
              <source
                srcset="@/assets/logos/desktop-logo.png"
                type="image/png"
                media="(min-width: 1440px)"
              />
              <source
                srcset="@/assets/logos/tablet-logo.png"
                type="image/png"
                media="(min-width: 768px)"
              />
              <img
                class="page-nav__logo-icon"
                src="@/assets/logos/mobile-logo.png"
                alt="Coffee Shop Logo"
              />
            </picture>
          </a>
        </div>
        <ul class="page-nav__list" :class="{ open: isMenuOpen }">
          <li class="page-nav__item"><a class="page-nav__link">Home</a></li>
          <li class="page-nav__item"><a class="page-nav__link">Menu</a></li>
          <li class="page-nav__item"><a class="page-nav__link">Delivery</a></li>
          <li class="page-nav__item"><a class="page-nav__link">About us</a></li>
        </ul>

        <ul class="page-nav__user">
          <li class="page-nav__item">
            <a class="page-nav__link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.667 4a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0ZM12 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-8.803 8.31C4.437 11.277 6.16 10.667 8 10.667s3.564.61 4.803 1.643c1.232 1.027 1.864 2.362 1.864 3.69H16c0-1.768-.843-3.464-2.343-4.714-1.5-1.25-3.535-1.953-5.657-1.953s-4.157.703-5.657 1.953S0 14.232 0 16h1.333c0-1.328.632-2.663 1.864-3.69Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Log In</span>
            </a>
          </li>
          <li class="page-nav__item">
            <a class="page-nav__link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m5.66 3.875.234 2.792h4.213l.232-2.792a2.347 2.347 0 1 0-4.678 0Zm5.784 2.792.224-2.68a3.68 3.68 0 1 0-7.336 0l.224 2.68H0L.19 8l.816 5.71A2.667 2.667 0 0 0 3.646 16h8.708a2.667 2.667 0 0 0 2.64-2.29L15.81 8 16 6.667h-4.556ZM11.334 8h-.054l-.222 2.667h3.024L14.462 8h-3.129ZM9.941 8H6.058l.222 2.667h3.44L9.942 8ZM4.72 8H1.537l.381 2.667h3.024L4.72 8Zm1.893 6.667L6.391 12H9.61l-.222 2.667H6.613ZM10.947 12l-.222 2.667h1.629c.663 0 1.226-.488 1.32-1.145L13.89 12h-2.944Zm-5.894 0 .222 2.667H3.646a1.333 1.333 0 0 1-1.32-1.145L2.11 12h2.944Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Cart</span>
            </a>
          </li>
        </ul>

        <button class="page-nav__toggle-btn" :class="{ open: isMenuOpen }" @click="toggleMenu">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.page-header {
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
}

.page-nav {
  display: flex;

  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
}

.page-nav__logo {
  @media (max-width: 767px) {
    margin-right: auto;
  }
}

.page-nav__logo a {
  width: 36px;
  height: 36px;
  display: block;

  @media (min-width: 768px) {
    width: 82px;
  }

  @media (min-width: 1440px) {
    width: 170px;
  }
}

.page-nav__logo-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 50%;
  @media (min-width: 768px) {
    border-radius: 0;
  }
}

.page-nav__toggle-btn {
  z-index: 1000;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 22px;

  display: flex;
  flex-direction: column;
  gap: 3.75px;

  @media (min-width: 768px) {
    display: none;
  }

  & div {
    width: 16px;
    height: 1.5px;
    background-color: #333333;
    transition: all 0.3s ease;

    &:first-child {
      margin-top: 2px;
    }

    &:last-child {
      margin-bottom: 2px;
    }
  }
}

.page-nav__toggle-btn.open div {
  &:first-child {
    transform: translateY(6px) rotate(45deg);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:last-child {
    transform: translateY(-5px) rotate(-45deg);
  }
}

.page-nav__list,
.page-nav__user {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: 1440px) {
    gap: 20px;
  }
}

.page-nav__list {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #ffffff;
  overflow: hidden;
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    border-radius: 0;
    box-shadow: none;
    flex-direction: row;
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
    position: static;
    overflow: auto;
  }
}

.page-nav__list.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;

  & .page-nav__item {
    border-bottom: 1px solid #eee;
  }

  & .page-nav__item:last-child {
    border: none;
  }
}

.page-nav__user span {
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
}

.page-nav__link {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  padding: 22px;
  display: block;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 32px 20px;
  }

  &:hover {
    color: #e2b479;
  }
}

.page-nav__user svg {
  width: 14px;
  height: 14px;

  transition: all 0.3s ease;

  @media (min-width: 1440px) {
    margin-right: 8px;
  }
}

.page-nav__user .page-nav__link {
  display: flex;
  align-items: center;

  &:hover svg {
    fill: #e2b479;
  }
}
</style>
