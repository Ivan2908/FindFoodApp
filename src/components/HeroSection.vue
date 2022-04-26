<template>
  <v-container class="py-15 heroClass">
    <div class="text-center mb-10 white--text">
      <h1>Descubre la mejor comida en Barranquilla</h1>
      <span>Enamora a tu paladar con los mejores restaurantes</span>
    </div>
    <div class="baseSearch">
      <v-text-field
        class="searchHero"
        prepend-inner-icon="mdi-magnify"
        label="Busca algun restaurante"
        single-line
        filled
        rounded
        hide-details
      />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
/** Section */
export default class HeroSection extends Vue {}
</script>

<style scoped>
.heroClass {
  background-image: url(https://foodhub-nuxt.vercel.app/_nuxt/img/header-bg.d39c465.png);
  background-size: cover;
  border-radius: 0.5rem;
  width: calc(1136px + 2 * 24px);
  max-width: 100%;
  height: 348px;
  padding-left: 24px;
  padding-right: 24px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.searchHero {
  background: white;
}
.baseSearch {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
