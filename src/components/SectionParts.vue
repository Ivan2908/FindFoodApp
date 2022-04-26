<template>
  <v-container class="py-15">
    <v-row class="d-flex">
      <v-col class="col-12">
        <h2>Top Restaurantes</h2>
      </v-col>
      <card-food
        v-for="restaurant in restaurants"
        :key="restaurant.id_Restaurant"
        :restaurant="restaurant"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import FoodDataService from '../services/FoodDataService';
import { Component, Vue } from 'vue-property-decorator';
import type Restaurant from '@interfaces/Restaurant';
import CardFood from '@/components/CardFood.vue'; // @ is an alias to /src

@Component({ components: { CardFood } })
/** Section */
export default class SectionParts extends Vue {
  restaurants: Array<Restaurant> = [];

  listAllRestaurant() {
    FoodDataService.getAllRestaurants()
      .then(response => {
        this.restaurants = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  mounted() {
    this.listAllRestaurant();
  }
}
</script>
