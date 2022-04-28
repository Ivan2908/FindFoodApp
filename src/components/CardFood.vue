<template>
  <v-hover>
    <template #default="{ hover }">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="mx-auto position-relative">
          <v-img class="btr-10" :src="restaurant.img" />

          <v-card-title>
            <h2 class="text-h6 primary--text position-relative">
              {{ restaurant.name }}
            </h2>
            <div class="mt-2">
              {{ restaurant.description | truncate(90, '...') }}
            </div>
          </v-card-title>

          <v-card-text>
            <v-rating
              :value="restaurant.rating"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            />
            <span class="primary--text text-subtitle-1">
              {{ restaurant.reviews }} Reviews
            </span>
          </v-card-text>

          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <router-link
                class="routerLink"
                :to="{
                  name: 'Restaurante',
                  params: { id: restaurant.id_Restaurant },
                }"
              >
                <v-btn>Ver mas detalle</v-btn>
              </router-link>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </v-col>
    </template>
  </v-hover>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';

@Component
/** HelloWorld Component */
export default class CardFood extends Vue {
  /** Meta information */
  meta: MetaInterface = Meta;

  overlay: boolean = false;

  // Props
  @Prop({ type: Object })
  restaurant: Object;
}
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}
</style>
