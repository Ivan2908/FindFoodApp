<template>
  <v-container class="home py-15">
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
