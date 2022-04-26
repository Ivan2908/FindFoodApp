<template>
  <v-container class="mt-8">
    <div class="d-flex justify-space-between flex-wrap flex-sm-nowrap mb-3">
      <div>PUT BREAD_CRUMBS</div>
      <v-btn class="mb-3 v-btn--has-bg theme--light v-size--default">
        Filter
      </v-btn>
    </div>

    <v-row class="d-flex flex-wrap">
      <v-col cols="12" xl="12">
        <div class="d-flex contentMain">
          <div class="contentCategories borderRCategories">
            <div>
              <div class="mb-6">
                <h6>Categories</h6>
                <v-checkbox v-model="checkboxPizza1" label="Pizza" />
                <v-checkbox v-model="checkboxPizza2" label="Pizza" />
                <v-checkbox v-model="checkboxPizza3" label="Pizza" />
                <v-checkbox v-model="checkboxPizza4" label="Pizza" />
              </div>
              <div class="mb-6">
                <h6>Categories By Rating</h6>
                <v-checkbox v-model="checkboxPizza5" label="5 +" />
                <v-checkbox v-model="checkboxPizza6" label="4 +" />
                <v-checkbox v-model="checkboxPizza7" label="3 +" />
                <v-checkbox v-model="checkboxPizza8" label="2 +" />
                <v-checkbox v-model="checkboxPizza9" label="1 +" />
              </div>
              <div class="mb-6">
                <h6 class="mt-6">Sort By</h6>
                <v-radio-group v-model="radioGroup">
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                  />
                </v-radio-group>
              </div>
              <div class="mb-6">
                <h6 class="mt-6 mb-12">Cost per person</h6>
                <!-- <v-range-slider
                  v-model="range"
                  :max="max"
                  :min="min"
                  hide-details
                  class="align-center"
                >
                  <template #prepend>
                    <v-text-field
                      :value="range[0]"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      style="width: 60px"
                      @change="$set(range, 0, $event)"
                    />
                  </template>
                  <template #append>
                    <v-text-field
                      :value="range[1]"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      style="width: 60px"
                      @change="$set(range, 1, $event)"
                    />
                  </template>
                </v-range-slider> -->
                <v-range-slider
                  :value="[0, 99]"
                  :mode="range"
                  :min="min"
                  :max="max"
                  ticks="always"
                  tick-size="1"
                >
                  <template v-slot:thumb-label="props">
                    <v-icon dark>
                      {{ props.value }}
                    </v-icon>
                  </template>
                </v-range-slider>
              </div>
            </div>
          </div>
          <div class="contentFood">
            <div class="px-7">
              <v-row class="d-flex flex-wrap">
                <v-col cols="12">
                  <h3 class="font-weight-bold">Categories</h3>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="6">
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
                <v-col cols="12" xl="4" lg="4" md="4" sm="6">
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
                <v-col cols="12" xl="4" lg="4" md="4" sm="6">
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
                <v-col cols="12" xl="4" lg="4" md="4" sm="6">
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
                <v-col cols="12" xl="4" lg="4" md="4" sm="6">
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
                <v-col cols="12" xl="4" lg="4" md="4" sm="6">
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
import { Component, Vue } from 'vue-property-decorator';

@Component
/** Categories */
export default class Categories extends Vue {
  radioGroup: number = 1;
  checkboxPizza1: boolean = false;
  checkboxPizza2: boolean = false;
  checkboxPizza3: boolean = false;
  checkboxPizza4: boolean = false;
  checkboxPizza5: boolean = false;
  checkboxPizza6: boolean = false;
  checkboxPizza7: boolean = false;
  checkboxPizza8: boolean = false;
  checkboxPizza9: boolean = false;

  range: Array<number> = [1, 40];
  min: number = 1;
  max: number = 99;
}
</script>

<style scoped>
.containMain {
  position: relative;
}
.contentFood {
  width: calc(100% - 280px);
}
.contentCategories {
  background-color: #fff;
  width: 260px;
  transition: all 0.3s ease-in;
}
.borderRCategories {
  border-right: 1px solid #dae1e7;
}
</style>
