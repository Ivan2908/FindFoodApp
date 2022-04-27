<template>
  <v-container class="home py-15">
    <v-row>
      <v-col cols="6">
        <v-img contain src="./src/assets/IntroHome.png" />
      </v-col>
      <v-col cols="6" class="d-flex flex-column flex-wrap">
        <div class="mt-1">
          <h1 class="text-h2 font-weight-medium">
            Don't worry about food and enjoy the best restaurants in the city
          </h1>
        </div>
        <div class="mt-3">
          <span class="text-h6">Find the best restaurants in one place</span>
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
export default class Home extends Vue {
  /*
  // Props
  @Prop()
  readonly prop: string = 'prop';

  // Model and Data
  data: string | null = null;

  // Computed
  get computed(): string {
    return this.$store.getters.computed;
  }

  // Watch
  @Watch('$route', { immediate: true })
  onRouteChanged(): void {
    // ...
  }

  // created or mounted etc.
  created(): void {
    // ...
  }

  // Methods
  methods(): string {
    return 'method';
  }
  */
}
</script>
