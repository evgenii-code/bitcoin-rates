<template>
  <article class="card">
    <div class="card__title-container">
      <h2 class="card__title">{{ currency }}</h2>
    </div>

    <div class="card__main-container">
      <my-text class="card__text">Price</my-text>

      <my-text class="card__text card__text_align_right" :bold="true">
        {{ data['USD']['PRICE'] }}
      </my-text>

      <my-text class="card__text">1 hour</my-text>

      <my-text class="card__text card__text_align_right" :bold="true">
        {{ data['USD']['CHANGEPCTHOUR'] }}%
      </my-text>

      <my-text class="card__text">1 day</my-text>

      <my-text class="card__text card__text_align_right" :bold="true">
        {{ data['USD']['CHANGEPCT24HOUR'] }}%
      </my-text>
    </div>
  </article>
</template>

<script>
import mixinComponents from '@/mixins/mixinComponents';

export default {
  mixins: [mixinComponents],

  props: {
    currency: String,
    data: Object,
  },
};
</script>

<style scoped>
.card {
  background-color: #30475e;
  width: 100%;
  max-width: 1440px;
  border-radius: 10px;
  transition: transform 0.1s;
}

/* .card:hover {
  z-index: 2;
  transform: scale(1.2);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
} */

.card__title-container {
  background-color: #f2a365;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card__title {
  font-size: 24px;
  margin: 0;
  color: #ececec;
}

.card__main-container {
  padding: 15px;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-row-gap: 10px;
}

.card__text {
  /* font-size: 16px; */
  margin: 0;
  color: #ececec;
}

.card__text_align_right {
  justify-self: right;
}

@media screen and (max-width: 425px) {
  .card__title-container {
    padding: 7px;
  }

  .card__title {
    font-size: 18px;
  }

  .card__main-container {
    padding: 10px;
  }

  .card__text {
    font-size: 11px;
  }
}
</style>
