<template>
  <v-container class="mt-6">
    <div class="d-flex justify-end flex-wrap flex-sm-nowrap mb-3">
      <v-btn
        color="primaryColor"
        class="mb-3 v-btn--has-bg theme--light v-size--default white--text"
      >
        Filter
      </v-btn>
    </div>

    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-hamburger</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>List of Categories</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <category-menu-filter />
    </v-navigation-drawer>

    <v-row class="d-flex flex-wrap">
      <v-col cols="12" xl="12">
        <div class="d-flex contentMain">
          <div class="contentCategories borderRCategories hidden-sm-and-down">
            <category-menu-filter />
          </div>
          <div :class="{ contentFood: $vuetify.breakpoint.smAndUp }">
            <div :class="{ 'pl-7': $vuetify.breakpoint.smAndUp }">
              <v-row class="d-flex flex-wrap">
                <v-col cols="12">
                  <h3 class="font-weight-bold hidden-sm-and-down">
                    Categories
                  </h3>
                  <v-btn
                    tile
                    color="success"
                    class="hidden-md-and-up"
                    @click.stop="drawer = !drawer"
                  >
                    <v-icon left>mdi-dots-vertical</v-icon>
                    Categories
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  xl="4"
                  lg="4"
                  md="4"
                  sm="4"
                  :class="{ cardMedia: $vuetify.breakpoint.smAndUp }"
                >
                  <v-card class="mx-auto">
                    <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    />

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        />

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  xl="4"
                  lg="4"
                  md="4"
                  sm="4"
                  :class="{ cardMedia: $vuetify.breakpoint.smAndUp }"
                >
                  <v-card class="mx-auto">
                    <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    />

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        />

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  xl="4"
                  lg="4"
                  md="4"
                  sm="4"
                  :class="{ cardMedia: $vuetify.breakpoint.smAndUp }"
                >
                  <v-card class="mx-auto">
                    <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    />

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        />

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  xl="4"
                  lg="4"
                  md="4"
                  sm="4"
                  :class="{ cardMedia: $vuetify.breakpoint.smAndUp }"
                >
                  <v-card class="mx-auto">
                    <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    />

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        />

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  xl="4"
                  lg="4"
                  md="4"
                  sm="4"
                  :class="{ cardMedia: $vuetify.breakpoint.smAndUp }"
                >
                  <v-card class="mx-auto">
                    <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    />

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        />

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  xl="4"
                  lg="4"
                  md="4"
                  sm="4"
                  :class="{ cardMedia: $vuetify.breakpoint.mdAndDown }"
                >
                  <v-card class="mx-auto">
                    <v-img
                      height="200"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    />

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        />

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import CategoryMenuFilter from '@/components/CategoryMenuFilter.vue';
import { Component, Vue } from 'vue-property-decorator';
import type Items from '@interfaces/Categories';

@Component({ components: { CategoryMenuFilter } })
/** Categories */
export default class Categories extends Vue {
  drawer: boolean | null = false;

  items: Array<Items> = [
    { title: 'Home', icon: 'mdi-view-dashboard' },
    { title: 'About', icon: 'mdi-forum' },
  ];
}
</script>

<style scoped>
.contentMain {
  position: relative;
}
.contentFood {
  width: 100%;
}
.contentCategories {
  background-color: #fff;
  width: 260px;
  transition: all 0.3s ease-in;
}
.cardMedia {
  width: 6rem;
}
.borderRCategories {
  border-right: 1px solid #dae1e7;
}
</style>
