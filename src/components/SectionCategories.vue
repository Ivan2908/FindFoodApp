<template>
  <v-container class="py-15">
    <v-row class="d-flex">
      <v-col class="col-12">
        <h2>Por Tipos de Cocina</h2>
      </v-col>
      <category-cousin-food
        v-for="cousinType in categoriesCousinType"
        :key="cousinType.idCousinTypeid"
        :cousinType="cousinType"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import CategoryCousinFood from '@/components/CategoryCousinFood.vue';
import FoodDataService from '../services/FoodDataService';
import type CousinType from '@interfaces/CategoriesFood';
import { Component, Vue } from 'vue-property-decorator';

@Component({ components: { CategoryCousinFood } })
/** Section Cousin Types */
export default class SectionCategories extends Vue {
  categoriesCousinType: Array<CousinType> = [];

  listAllCousinTypes() {
    FoodDataService.getAllCousinTypes()
      .then(response => {
        this.categoriesCousinType = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  mounted() {
    this.listAllCousinTypes();
  }
}
</script>
