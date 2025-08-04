<script setup lang="ts">
import AppMap from './AppMap.vue';
</script>

<template>
  <AppMap />
  <footer class="page-footer">
    <div class="container">
      <div class="page-footer__main">
        <a class="page-footer__logo" href="#">
          <picture>
            <source
              srcset="@/assets/logos/desktop-logo.png"
              type="image/png"
              media="(min-width: 768px)"
            />
            <img
              class="page-footer__logo-icon"
              src="@/assets/logos/tablet-logo.png"
              alt="Coffee Shop Logo"
            />
          </picture>
        </a>

        <h2 class="page-footer__title">Online coffee and beverage store</h2>
        <ul class="page-footer__socials">
          <li class="page-footer__social-item">
            <a href="https://t.me/pank1ch" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.93 5.48-1.31 6.19c-.1.44-.36.54-.73.34l-2-1.48-1 .93a.511.511 0 0 1-.4.2l.14-2 3.7-3.35c.17-.14 0-.22-.24-.08l-4.54 2.85-2-.62c-.43-.13-.44-.43.09-.63l7.71-3c.38-.11.7.11.58.65Z"
                />
              </svg>
            </a>
          </li>
          <li class="page-footer__social-item">
            <a href="https://www.instagram.com/kirryshaa/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
                />
                <path
                  d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zm5.7-10.484a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
                />
              </svg>
            </a>
          </li>
          <li class="page-footer__social-item">
            <a href="https://x.com/Pank12124576" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 1200 1227"
              >
                <path
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="page-footer__shop shop">
        <h3 class="shop__title">Online shop</h3>
        <ul class="shop__list">
          <li class="shop__item">
            <a href="#">Catalog</a>
          </li>
          <li class="shop__item">
            <a href="#">Delivery</a>
          </li>
          <li class="shop__item">
            <a href="#">Payment Methods</a>
          </li>
          <li class="shop__item">
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>

      <div class="page-footer__media media">
        <h3 class="media__title">Media</h3>
        <ul class="media__list">
          <li class="media__item">
            <a href="#">Blog</a>
          </li>
          <li class="media__item">
            <a href="#">Information for the media</a>
          </li>
          <li class="media__item">
            <a href="#">Legal information</a>
          </li>
        </ul>
      </div>

      <div class="page-footer__contacts contacts">
        <h3 class="contacts__title">Contacts</h3>
        <ul class="contacts__list">
          <li class="contacts__item contacts__item--address">
            <span>1705 Ocean Ave, Santa Monica, CA 90401, United States</span>
          </li>
          <li class="contacts__item contacts__item--phone">
            <a href="tel:+13104582802">+13104582802</a>
          </li>
        </ul>
      </div>

      <div class="page-footer__copyright copyright">
        <a class="copyright__link" href="https://github.com/pank1ch" target="_blank">
          <h3 class="copyright__title">Developed by pank1ch</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.page-footer {
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
}

.page-footer .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;

  @media (min-width: 768px) {
    padding: 0 20px;
  }
}

.page-footer__main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 22px 20px;
  border: 1px solid #fff5e0;

  @media (min-width: 768px) {
    border: none;
    padding: 0;
    margin-bottom: 33px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: auto;
    margin: 0;
  }
}

.page-footer__logo {
  width: 82px;
  height: 36px;
  display: block;

  @media (min-width: 768px) {
    width: 170px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 10px;
  }
}

.page-footer__logo-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.page-footer__title {
  color: #333333;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  margin: 0 0 50px 0;
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
}

.page-footer__socials {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  align-items: center;
}

.page-footer__social-item a {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #bdbdbd;
  transition: color 0.3s ease;
  &:hover {
    color: #e2b479;
  }
  & svg {
    width: 30px;
    height: 30px;
  }
}

.page-footer__social-item:last-child svg {
  width: 20px;
  height: 20px;
}

.page-footer__shop,
.page-footer__media,
.page-footer__contacts {
  padding: 20px;
  border: 1px solid #fff5e0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
    width: auto;
    border: none;
    padding: 0;
  }
}

.shop__title,
.media__title,
.contacts__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;
  color: #e4b378;
  margin: 0 0 12px 0;
}

.shop__list,
.media__list,
.contacts__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span {
    color: #333333;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    display: block;
    padding: 8px 0;
  }

  & a {
    color: #333333;
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    text-decoration: none;
    display: block;
    padding: 8px 0;

    transition: all 0.3s ease;
    &:hover {
      color: #e2b479;
    }
  }
}

.copyright {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 30px;

  @media (min-width: 768px) {
    padding: 0;
    margin-top: 30px;
  }
}

.copyright__link {
  display: flex;
  align-items: center;
  color: #bdbdbd;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #e2b479;
  }

  & svg {
    width: 18px;
    height: 18px;
    margin-left: 5px;
    transition: all 0.3s ease;
  }
}

.copyright__title {
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: inherit;
  margin: 0;
  transition: all 0.3s ease;
}

.contacts__item {
  padding-left: 20px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 13px;
    height: 16px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &--address {
    &::before {
      background-image: url('@/assets/icons/address.png');
    }
  }

  &--phone {
    &::before {
      background-image: url('@/assets/icons/phone.png');
    }
  }
}
</style>
