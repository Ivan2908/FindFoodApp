<template>
  <v-container class="py-15 heroClass">
    <div class="text-center mb-10 white--text">
      <h1>Discover the best of Barranquilla</h1>
      <span>Fall in love with your palate with the best restaurants</span>
    </div>
    <div class="baseSearch">
      <v-text-field
        class="searchHero"
        v-model="search"
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
export default class HeroSection extends Vue {
  /** Search Input */
  get search(): string {
    return this.$store.getters.search;
  }

  /**
   * Set Search Input
   *
   * @param value - Visibility
   */
  set search(value: string) {
    this.$store.dispatch('setSearch', value);
  }
}
</script>

<style scoped>
.heroClass {
  background-image: url('./src/assets/bannerHeroSearch.jpg');
  background-size: cover;
  border-radius: 0.5rem;
  width: 100%;
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
