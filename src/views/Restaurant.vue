<template>
  <v-container class="content">
    <v-row class="row--dense">
      <v-col cols="12">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="item in items"
            :key="item.id"
            :src="item.src"
            reverse-transition="fade-transition"
            fade
          />
        </v-carousel>
      </v-col>
      <v-col cols="12" class="mt-3">
        <div class="d-flex justify-space-between flex-wrap align-center mb-3">
          <h1 class="me-2">Pizza Hut</h1>
          <div class="mb-3 d-flex">
            <v-rating
              :value="4"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            />

            <span class="text-14 me-1">
              4.5
              <span class="grey--text">(1004)</span>
            </span>
          </div>
        </div>
        <p class="mb-5 text-14">
          Coffee, signature roasts, light bite, quick bite, fast foods
        </p>
        <div
          class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap"
        >
          <v-icon class="grey--text textClass">mdi-map-marker</v-icon>
          The Dorothy Ross Friedman Residence, NY, US - Show Map
        </div>
        <div
          class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap"
        >
          <v-icon class="grey--text textClass">mdi-clock-outline</v-icon>
          <span class="primary--text me-2">Open Now</span>
          - Sun - Mon: 9am - 10pm
        </div>
        <div
          class="grey--text text--darken-1 align-middle text-14 mb-4 d-flex align-center flex-wrap"
        >
          <v-icon class="grey--text textClass">mdi-earth</v-icon>
          <a
            href="/resturant/FileNotFound"
            aria-current="page"
            class="text-decoration-none grey--text text--darken-1 nuxt-link-exact-active nuxt-link-active"
          >
            www.pizzaHut.com
          </a>
        </div>
        <restaurant-tabs />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import RestaurantTabs from '@/components/RestaurantTabs.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: { RestaurantTabs } })
/** Restaurant */
export default class Restaurant extends Vue {
  items: Array<Object> = [
    {
      src: 'https://images.pizzahut.services/vol/phco/images/content/promociones/pq02_c.png',
      id: 1,
    },
    {
      src: 'https://images.pizzahut.services/vol/phco/images/content/promociones/4cam85_c.png',
      id: 2,
    },
    {
      src: 'https://images.pizzahut.services/vol/phco/images/content/promociones/tripleb4_c.png',
      id: 3,
    },
    {
      src: 'https://images.pizzahut.es/Coupons/Original/Doble_Hut_Familiares-T(2P)509-17.png',
      id: 4,
    },
  ];
}
</script>

<style scoped>
.content {
  margin-top: 2rem;
}
.textClass {
  font-size: 16px;
}
</style>
