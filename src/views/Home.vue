<template>
  <v-container class="home py-8">
    <v-row class="hidden-md-and-down">
      <v-col cols="6">
        <v-img contain src="./src/assets/IntroHome.png" />
      </v-col>
      <v-col cols="6" class="d-flex flex-column flex-wrap mt-16">
        <div class="mt-1">
          <h1 class="text-h2 font-weight-medium">
            Don't worry about food and enjoy the best restaurants in the city
          </h1>
        </div>
        <div class="mt-1">
          <span class="text-subheading1">
            Find the best restaurants in one place
          </span>
          <router-link
            class="routerLink"
            :to="{
              name: 'Categories',
            }"
          >
            <v-btn rounded color="primaryColor" class="ma-2 white--text mb-2">
              Explore
              <v-icon right dark>mdi-food-hot-dog</v-icon>
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
    <hero-section />
    <section-parts />
    <section-categories />
  </v-container>
</template>

<script lang="ts">
import SectionCategories from '@/components/SectionCategories.vue';
import SectionParts from '@/components/SectionParts.vue'; // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import HeroSection from '@/components/HeroSection.vue';

@Component({ components: { SectionParts, HeroSection, SectionCategories } })
/** Home */
export default class Home extends Vue {}
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}
</style>
